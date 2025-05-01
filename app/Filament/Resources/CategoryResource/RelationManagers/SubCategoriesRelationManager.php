<?php

namespace App\Filament\Resources\CategoryResource\RelationManagers;

use Filament\Forms\Components\Fieldset;
use Filament\Forms\Components\TextInput;
use Filament\Forms\Form;
use Filament\Resources\RelationManagers\RelationManager;
use Filament\Tables;
use Filament\Tables\Columns\TextColumn;
use Filament\Tables\Table;

class SubCategoriesRelationManager extends RelationManager
{
    protected static string $relationship = 'subCategories';

    public static function getModelLabel(): string
    {
        return __('sub-categories.sub-category');
    }

    public static function getPluralModelLabel(): string
    {
        return __('sub-categories.sub-categories');
    }

    public function form(Form $form): Form
    {
        return $form
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
            ]);
    }

    public function table(Table $table): Table
    {
        return $table
            ->heading(fn() => __('sub-categories.sub-categories'))
            ->recordTitleAttribute('name')
            ->columns([
                TextColumn::make('id')
                    ->sortable()
                    ->searchable(),

                TextColumn::make('name')
                    ->label('sub-categories.name')
                    ->translateLabel()
                    ->searchable()
                    ->sortable(),
            ])
            ->filters([
                //
            ])
            ->headerActions([
                Tables\Actions\CreateAction::make(),
            ])
            ->actions([
                Tables\Actions\EditAction::make(),
                Tables\Actions\DeleteAction::make(),
            ])
            ->bulkActions([
                Tables\Actions\BulkActionGroup::make([
                    Tables\Actions\DeleteBulkAction::make(),
                ]),
            ]);
    }
}
