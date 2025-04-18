<?php

namespace App\Filament\Resources;

use App\Filament\Resources\CategoryResource\Pages;
use App\Models\Category;
use Filament\Forms;
use Filament\Forms\Form;
use Filament\Resources\Resource;
use Filament\Tables;
use Filament\Tables\Table;
use Livewire\Features\SupportFileUploads\FileUploadConfiguration;

class CategoryResource extends Resource
{
    protected static ?string $model = Category::class;

    protected static ?string $navigationIcon = 'heroicon-o-rectangle-stack';

    protected static ?string $navigationGroup = 'Content';

    public static function form(Form $form): Form
    {
        return $form
            ->schema([
                Forms\Components\Section::make(fn() => __('categories.name'))
                    ->schema([
                        ...collect(config('localized-routes.supported_locales'))->map(function ($locale) {
                            return
                                Forms\Components\TextInput::make("name.$locale")
                                    ->label($locale)
                                    ->required();
                        })
                    ]),
                Forms\Components\ColorPicker::make('color')
                    ->label('categories.color')
                    ->translateLabel()
                    ->default('#00CCFF')
                    ->required(),
                Forms\Components\FileUpload::make('icon')
                    ->label('categories.icon')
                    ->translateLabel()
                    ->disk(FileUploadConfiguration::disk())
                    ->directory(FileUploadConfiguration::path())
                    ->storeFiles(false)
                    ->visibility('private')
                    ->image()
                    ->required(),
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
                Tables\Actions\EditAction::make(),
            ])
            ->bulkActions([
                Tables\Actions\BulkActionGroup::make([
                    Tables\Actions\DeleteBulkAction::make(),
                ]),
            ]);
    }

    public static function getRelations(): array
    {
        return [
            //
        ];
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
}
