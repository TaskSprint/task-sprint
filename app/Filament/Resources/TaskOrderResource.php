<?php

namespace App\Filament\Resources;

use App\Enums\TaskOrderStatus;
use App\Filament\Resources\TaskOrderResource\Pages;
use App\Models\TaskOrder;
use Filament\Forms\Components\Grid;
use Filament\Forms\Components\Placeholder;
use Filament\Forms\Components\Section;
use Filament\Forms\Components\Select;
use Filament\Forms\Form;
use Filament\Resources\Resource;
use Filament\Tables\Actions\BulkActionGroup;
use Filament\Tables\Actions\DeleteAction;
use Filament\Tables\Actions\DeleteBulkAction;
use Filament\Tables\Actions\EditAction;
use Filament\Tables\Columns\TextColumn;
use Filament\Tables\Table;
use Illuminate\Contracts\Support\Htmlable;
use Illuminate\Database\Eloquent\Builder;
use Illuminate\Database\Eloquent\Model;

class TaskOrderResource extends Resource
{
    protected static ?string $model = TaskOrder::class;

    protected static ?string $slug = 'task-orders';

    protected static ?string $navigationIcon = 'heroicon-o-briefcase';

    protected static ?int $navigationSort = 2;

    public static function form(Form $form): Form
    {
        return $form
            ->schema([
                Grid::make()
                    ->schema([
                        Select::make('task_id')
                            ->label('task-orders.task')
                            ->translateLabel()
                            ->relationship('task', 'name')
                            ->searchable()
                            ->required(),

                        Select::make('status')
                            ->label('task-orders.status')
                            ->translateLabel()
                            ->options(TaskOrderStatus::class)
                            ->default(TaskOrderStatus::Pending)
                            ->required(),

                        Select::make('employee_id')
                            ->label('task-orders.employee')
                            ->translateLabel()
                            ->relationship('employee', 'name')
                            ->searchable()
                            ->required(),
                    ])->columnSpan(2),

                Section::make(fn() => __('task-orders.meta'))
                    ->schema([
                        Placeholder::make('created_at')
                            ->label('task-orders.created_at')
                            ->translateLabel()
                            ->content(fn(?TaskOrder $record): string => $record?->created_at?->diffForHumans() ?? '-'),

                        Placeholder::make('updated_at')
                            ->label('task-orders.updated_at')
                            ->translateLabel()
                            ->content(fn(?TaskOrder $record): string => $record?->updated_at?->diffForHumans() ?? '-'),
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

    public static function table(Table $table): Table
    {
        return $table
            ->columns([
                TextColumn::make('status')
                    ->label('task-orders.status')
                    ->translateLabel()
                    ->badge(),

                TextColumn::make('task.name')
                    ->label('task-orders.task')
                    ->translateLabel()
                    ->searchable()
                    ->sortable(),

                TextColumn::make('employee.name')
                    ->label('task-orders.employee')
                    ->translateLabel()
                    ->searchable()
                    ->sortable(),
            ])
            ->filters([
                //
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
            'index' => Pages\ListTaskOrders::route('/'),
            'create' => Pages\CreateTaskOrder::route('/create'),
            'edit' => Pages\EditTaskOrder::route('/{record}/edit'),
        ];
    }

    public static function getGlobalSearchEloquentQuery(): Builder
    {
        return parent::getGlobalSearchEloquentQuery()->with(['employee', 'task']);
    }

    public static function getGlobalSearchResultTitle(Model $record): string|Htmlable
    {
        return $record->task->name;
    }

    public static function getGloballySearchableAttributes(): array
    {
        return ['employee.name', 'task.name'];
    }

    public static function getGlobalSearchResultDetails(Model $record): array
    {
        $details = [
            __('task-orders.status') => $record->status->getLabel()
        ];

        if ($record->employee) {
            $details[__('task-orders.employee')] = $record->employee->name;
        }

        return $details;
    }

    public static function getModelLabel(): string
    {
        return __('task-orders.task_order');
    }

    public static function getPluralModelLabel(): string
    {
        return __('task-orders.task_orders');
    }

    public static function getNavigationGroup(): ?string
    {
        return __('tasks.tasks');
    }
}
