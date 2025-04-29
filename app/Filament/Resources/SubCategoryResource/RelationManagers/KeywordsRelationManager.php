<?php

namespace App\Filament\Resources\SubCategoryResource\RelationManagers;

use Filament\Forms\Components\TextInput;
use Filament\Forms\Form;
use Filament\Resources\RelationManagers\RelationManager;
use Filament\Tables;
use Filament\Tables\Columns\TextColumn;
use Filament\Tables\Table;

class KeywordsRelationManager extends RelationManager
{
    protected static string $relationship = 'keywords';

    public static function getModelLabel(): string
    {
        return __('keywords.keyword');
    }

    public static function getPluralModelLabel(): string
    {
        return __('keywords.keywords');
    }

    public function form(Form $form): Form
    {
        return $form
            ->schema([
                TextInput::make('name')
                    ->label('keywords.name')
                    ->translateLabel()
                    ->required(),
            ]);
    }

    public function table(Table $table): Table
    {
        return $table
            ->heading(fn() => __('sub-categories.keywords'))
            ->recordTitleAttribute('name')
            ->columns([
                TextColumn::make('id')
                    ->sortable()
                    ->searchable(),

                TextColumn::make('name')
                    ->label('keywords.name')
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
