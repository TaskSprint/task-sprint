<?php

namespace App\Filament\Resources;

use App\Filament\Resources\SubCategoryResource\Pages;
use App\Models\Category;
use App\Models\SubCategory;
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
use Filament\Tables\Table;
use Illuminate\Database\Eloquent\Builder;
use Illuminate\Database\Eloquent\Model;

class SubCategoryResource extends Resource
{
    protected static ?string $model = SubCategory::class;

    protected static ?string $slug = 'sub-categories';

    protected static ?string $navigationIcon = 'heroicon-o-squares-plus';

    public static function form(Form $form): Form
    {
        return $form
            ->schema([
                Grid::make()
                    ->schema([
                        Fieldset::make(fn() => __('sub-categories.name'))
                            ->schema([
                                ...collect(config('localized-routes.supported_locales'))->map(function ($locale) {
                                    return
                                        TextInput::make("name.$locale")
                                            ->label($locale)
                                            ->required();
                                })
                            ]),

                        Select::make('category_id')
                            ->label('sub-categories.category')
                            ->translateLabel()
                            ->getSearchResultsUsing(fn(?string $search) => Category::query()
                                ->where('name', 'like', "%$search%")
                                ->pluck('name', 'id')
                                ->map(fn($name) => $name->current)
                            )
                            ->getOptionLabelUsing(fn($value) => Category::find($value)?->name->current)
                            ->searchable()
                            ->required(),
                    ])->columnSpan(2),


                Section::make(fn() => __('sub-categories.meta'))
                    ->schema([
                        Placeholder::make('created_at')
                            ->label('sub-categories.created_at')
                            ->translateLabel()
                            ->content(fn(?SubCategory $record): string => $record?->created_at?->diffForHumans() ?? '-'),

                        Placeholder::make('updated_at')
                            ->label('sub-categories.updated_at')
                            ->translateLabel()
                            ->content(fn(?SubCategory $record): string => $record?->updated_at?->diffForHumans() ?? '-'),
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
                TextColumn::make('id')
                    ->sortable()
                    ->searchable(),

                TextColumn::make('name')
                    ->label('sub-categories.name')
                    ->translateLabel()
                    ->searchable()
                    ->sortable(),

                TextColumn::make('category.name')
                    ->label('sub-categories.category')
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
            'index' => Pages\ListSubCategories::route('/'),
            'create' => Pages\CreateSubCategory::route('/create'),
            'edit' => Pages\EditSubCategory::route('/{record}/edit'),
        ];
    }

    public static function getGlobalSearchEloquentQuery(): Builder
    {
        return parent::getGlobalSearchEloquentQuery()->with(['category']);
    }

    public static function getGlobalSearchResultTitle(Model $record): string
    {
        return $record->name;
    }

    public static function getGloballySearchableAttributes(): array
    {
        return ['name', 'category.name'];
    }

    public static function getGlobalSearchResultDetails(Model $record): array
    {
        $details = [];

        if ($record->category) {
            $details[__('sub-categories.category')] = $record->category->name;
        }

        return $details;
    }

    public static function getModelLabel(): string
    {
        return __('sub-categories.sub-category');
    }

    public static function getPluralModelLabel(): string
    {
        return __('sub-categories.sub-categories');
    }

    public static function getNavigationGroup(): ?string
    {
        return __('categories.categories');
    }
}
