<?php

namespace App\Filament\Resources;

use App\Enums\TaskStatus;
use App\Filament\Resources\TaskResource\Pages;
use App\Models\SubCategory;
use App\Models\Task;
use Exception;
use Filament\Forms\Components\DatePicker;
use Filament\Forms\Components\Fieldset;
use Filament\Forms\Components\Grid;
use Filament\Forms\Components\Placeholder;
use Filament\Forms\Components\Section;
use Filament\Forms\Components\Select;
use Filament\Forms\Components\TextInput;
use Filament\Forms\Form;
use Filament\Resources\Resource;
use Filament\Tables\Actions\BulkActionGroup;
use Filament\Tables\Actions\DeleteAction;
use Filament\Tables\Actions\DeleteBulkAction;
use Filament\Tables\Actions\EditAction;
use Filament\Tables\Columns\TextColumn;
use Filament\Tables\Filters\SelectFilter;
use Filament\Tables\Table;
use Illuminate\Contracts\Support\Htmlable;
use Illuminate\Database\Eloquent\Builder;
use Illuminate\Database\Eloquent\Model;

class TaskResource extends Resource
{
    protected static ?string $model = Task::class;

    protected static ?string $slug = 'tasks';

    protected static ?string $navigationIcon = 'heroicon-o-check-circle';

    public static function form(Form $form): Form
    {
        return $form
            ->schema([
                Grid::make()
                    ->schema([
                        TextInput::make('name')
                            ->label('tasks.name')
                            ->translateLabel()
                            ->required(),

                        TextInput::make('description')
                            ->label('tasks.description')
                            ->translateLabel()
                            ->required(),

                        TextInput::make('price')
                            ->label('tasks.price')
                            ->translateLabel()
                            ->required()
                            ->numeric()
                            ->minValue(0),

                        Select::make('currency_code')
                            ->label('tasks.currency')
                            ->translateLabel()
                            ->relationship('currency', 'name')
                            ->default('UAH')
                            ->required(),

                        DatePicker::make('estimated_date')
                            ->label('tasks.estimated_date')
                            ->translateLabel()
                            ->required(),

                        Select::make('sub_category_id')
                            ->label('tasks.sub_category')
                            ->translateLabel()
                            ->getSearchResultsUsing(fn(?string $search) => SubCategory::query()
                                ->where('name', 'like', "%$search%")
                                ->pluck('name', 'id')
                                ->map(fn($name) => $name->current)
                            )
                            ->getOptionLabelUsing(fn($value) => SubCategory::find($value)?->name->current)
                            ->searchable()
                            ->required(),

                        Select::make('status')
                            ->label('tasks.status')
                            ->translateLabel()
                            ->options(TaskStatus::class)
                            ->default(TaskStatus::Pending)
                            ->required(),

                        Select::make('customer_id')
                            ->label('tasks.customer')
                            ->translateLabel()
                            ->relationship('customer', 'name')
                            ->default(auth()->id())
                            ->searchable()
                            ->required(),

                        Fieldset::make(fn() => __('tasks.address'))
                            ->schema([
                                TextInput::make('address.region')
                                    ->label('tasks.region')
                                    ->translateLabel()
                                    ->required(),

                                TextInput::make('address.city')
                                    ->label('tasks.city')
                                    ->translateLabel()
                                    ->required(),

                                TextInput::make('address.street')
                                    ->label('tasks.street')
                                    ->translateLabel()
                                    ->required(),

                                TextInput::make('address.building')
                                    ->label('tasks.building')
                                    ->translateLabel()
                                    ->required(),
                            ]),
                    ])->columnSpan(2),

                Section::make(fn() => __('tasks.meta'))
                    ->schema([
                        Placeholder::make('created_at')
                            ->label('tasks.created_at')
                            ->translateLabel()
                            ->content(fn(?Task $record): string => $record?->created_at?->diffForHumans() ?? '-'),

                        Placeholder::make('updated_at')
                            ->label('tasks.updated_at')
                            ->translateLabel()
                            ->content(fn(?Task $record): string => $record?->updated_at?->diffForHumans() ?? '-'),
                    ])
                    ->columnSpan([
                        "default" => 2,
                        "lg" => 1,
                    ]),
            ])->columns([
                "default" => 2,
                "lg" => 3,
            ]);
    }

    /**
     * @throws Exception
     */
    public static function table(Table $table): Table
    {
        return $table
            ->columns([
                TextColumn::make('status')
                    ->label('tasks.status')
                    ->translateLabel()
                    ->badge(),

                TextColumn::make('name')
                    ->label('tasks.name')
                    ->translateLabel()
                    ->searchable()
                    ->sortable(),

                TextColumn::make('price')
                    ->label('tasks.price')
                    ->translateLabel()
                    ->sortable()
                    ->money(fn(?Task $record) => $record->currency?->code ?? 'UAH')
                    ->searchable(),

                TextColumn::make('estimated_date')
                    ->label('tasks.estimated_date')
                    ->translateLabel()
                    ->date()
                    ->sortable(),

                TextColumn::make('customer.name')
                    ->label('tasks.customer')
                    ->translateLabel()
                    ->searchable()
                    ->sortable(),

                TextColumn::make('subCategory.name')
                    ->label('tasks.sub_category')
                    ->translateLabel()
                    ->searchable()
                    ->sortable(),
            ])
            ->filters([
                SelectFilter::make('status')
                    ->label('tasks.status')
                    ->translateLabel()
                    ->multiple()
                    ->options(TaskStatus::class)
            ])
            ->actions([
                EditAction::make(),
                DeleteAction::make(),
            ])
            ->bulkActions([
                BulkActionGroup::make([
                    DeleteBulkAction::make(),
                ]),
            ]);
    }

    public static function getPages(): array
    {
        return [
            'index' => Pages\ListTasks::route('/'),
            'create' => Pages\CreateTask::route('/create'),
            'edit' => Pages\EditTask::route('/{record}/edit'),
        ];
    }

    public static function getGlobalSearchResultTitle(Model $record): string|Htmlable
    {
        return $record->name;
    }

    public static function getGlobalSearchEloquentQuery(): Builder
    {
        return parent::getGlobalSearchEloquentQuery()->with(['customer', 'subCategory']);
    }

    public static function getGloballySearchableAttributes(): array
    {
        return ['name', 'description', 'customer.name', 'subCategory.name'];
    }

    public static function getGlobalSearchResultDetails(Model $record): array
    {
        $details = [
            __('tasks.status') => $record->status->getLabel(),
        ];

        if ($record->customer) {
            $details[__('tasks.customer')] = $record->customer->name;
        }

        if ($record->subCategory) {
            $details[__('tasks.sub_category')] = $record->subCategory->name;
        }

        return $details;
    }

    public static function getModelLabel(): string
    {
        return __('tasks.task');
    }

    public static function getPluralModelLabel(): string
    {
        return __('tasks.tasks');
    }

    public static function getNavigationGroup(): ?string
    {
        return __('tasks.tasks');
    }
}
