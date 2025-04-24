<?php

namespace App\Filament\Resources;

use App\Filament\Resources\CategoryResource\Pages;
use App\Filament\Resources\CategoryResource\RelationManagers\SubCategoriesRelationManager;
use App\Models\Category;
use Filament\Forms\Components\ColorPicker;
use Filament\Forms\Components\Fieldset;
use Filament\Forms\Components\FileUpload;
use Filament\Forms\Components\Grid;
use Filament\Forms\Components\Placeholder;
use Filament\Forms\Components\Section;
use Filament\Forms\Components\TextInput;
use Filament\Forms\Form;
use Filament\Resources\Resource;
use Filament\Tables;
use Filament\Tables\Actions\BulkActionGroup;
use Filament\Tables\Actions\DeleteAction;
use Filament\Tables\Actions\DeleteBulkAction;
use Filament\Tables\Actions\EditAction;
use Filament\Tables\Table;
use Illuminate\Database\Eloquent\Model;
use Livewire\Features\SupportFileUploads\FileUploadConfiguration;

class CategoryResource extends Resource
{
    protected static ?string $model = Category::class;

    protected static ?string $navigationIcon = 'heroicon-o-squares-2x2';

    public static function form(Form $form): Form
    {
        return $form
            ->schema([
                Grid::make()
                    ->schema([
                        Fieldset::make(fn() => __('categories.name'))
                            ->schema([
                                ...collect(config('localized-routes.supported_locales'))->map(function ($locale) {
                                    return
                                        TextInput::make("name.$locale")
                                            ->label($locale)
                                            ->required();
                                })
                            ]),

                        FileUpload::make('icon')
                            ->label('categories.icon')
                            ->translateLabel()
                            ->disk(FileUploadConfiguration::disk())
                            ->directory(FileUploadConfiguration::path())
                            ->storeFiles(false)
                            ->visibility('private')
                            ->image()
                            ->required(),

                        ColorPicker::make('color')
                            ->label('categories.color')
                            ->translateLabel()
                            ->default('#00CCFF')
                            ->required(),
                    ])->columnSpan(2),

                Section::make(fn() => __('categories.meta'))
                    ->schema([
                        Placeholder::make('created_at')
                            ->label('categories.created_at')
                            ->translateLabel()
                            ->content(fn(?Category $record): string => $record?->created_at?->diffForHumans() ?? '-'),

                        Placeholder::make('updated_at')
                            ->label('categories.updated_at')
                            ->translateLabel()
                            ->content(fn(?Category $record): string => $record?->updated_at?->diffForHumans() ?? '-'),
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
                Tables\Columns\TextColumn::make('id')
                    ->sortable()
                    ->searchable(),
                Tables\Columns\TextColumn::make('name')
                    ->label('categories.name')
                    ->translateLabel()
                    ->sortable()
                    ->searchable(),
                Tables\Columns\ColorColumn::make('color')
                    ->label('categories.color')
                    ->translateLabel()
                    ->sortable()
                    ->searchable(),
            ])->filters([
                //
            ])->headerActions([
                Tables\Actions\CreateAction::make(),
            ])->actions([
                //
            ])->bulkActions([
                //
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

    public static function getRelations(): array
    {
        return [
            SubCategoriesRelationManager::class
        ];
    }

    public static function getGlobalSearchResultTitle(Model $record): string
    {
        return $record->name;
    }

    public static function getGloballySearchableAttributes(): array
    {
        return ['name'];
    }

    public static function getPages(): array
    {
        return [
            'index' => Pages\ListCategories::route('/'),
            'create' => Pages\CreateCategory::route('/create'),
            'edit' => Pages\EditCategory::route('/{record}/edit'),
        ];
    }

    public static function getModelLabel(): string
    {
        return __('categories.category');
    }

    public static function getPluralModelLabel(): string
    {
        return __('categories.categories');
    }

    public static function getNavigationGroup(): ?string
    {
        return __('categories.categories');
    }
}
