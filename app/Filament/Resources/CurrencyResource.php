<?php

namespace App\Filament\Resources;

use App\Filament\Resources\CurrencyResource\Pages;
use App\Models\Currency;
use Filament\Forms\Components\Fieldset;
use Filament\Forms\Components\Grid;
use Filament\Forms\Components\Placeholder;
use Filament\Forms\Components\Section;
use Filament\Forms\Components\TextInput;
use Filament\Forms\Form;
use Filament\Resources\Resource;
use Filament\Tables\Actions\BulkActionGroup;
use Filament\Tables\Actions\DeleteAction;
use Filament\Tables\Actions\DeleteBulkAction;
use Filament\Tables\Actions\EditAction;
use Filament\Tables\Columns\TextColumn;
use Filament\Tables\Table;
use Illuminate\Contracts\Support\Htmlable;
use Illuminate\Database\Eloquent\Model;

class CurrencyResource extends Resource
{
    protected static ?string $model = Currency::class;

    protected static ?string $slug = 'currencies';

    protected static ?string $navigationIcon = 'heroicon-o-currency-dollar';

    protected static ?int $navigationSort = 2;

    public static function form(Form $form): Form
    {
        return $form
            ->schema([
                Grid::make()
                    ->schema([
                        Fieldset::make(fn() => __('currencies.name'))
                            ->schema([
                                ...collect(config('localized-routes.supported_locales'))->map(function ($locale) {
                                    return
                                        TextInput::make("name.$locale")
                                            ->label($locale)
                                            ->required();
                                })
                            ]),

                        TextInput::make('code')
                            ->label('currencies.code')
                            ->translateLabel()
                            ->required(),
                    ])->columnSpan(2),

                Section::make(fn() => __('currencies.meta'))
                    ->schema([
                        Placeholder::make('created_at')
                            ->label('currencies.created_at')
                            ->translateLabel()
                            ->content(fn(?Currency $record): string => $record?->created_at?->diffForHumans() ?? '-'),

                        Placeholder::make('updated_at')
                            ->label('currencies.updated_at')
                            ->translateLabel()
                            ->content(fn(?Currency $record): string => $record?->updated_at?->diffForHumans() ?? '-'),
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
                TextColumn::make('code')
                    ->label('currencies.code')
                    ->translateLabel()
                    ->sortable()
                    ->searchable(),
                TextColumn::make('name')
                    ->label('currencies.name')
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
            'index' => Pages\ListCurrencies::route('/'),
            'create' => Pages\CreateCurrency::route('/create'),
            'edit' => Pages\EditCurrency::route('/{record}/edit'),
        ];
    }

    public static function getGlobalSearchResultTitle(Model $record): string|Htmlable
    {
        return $record->name;
    }

    public static function getGloballySearchableAttributes(): array
    {
        return ['name'];
    }

    public static function getModelLabel(): string
    {
        return __('currencies.currency');
    }

    public static function getPluralModelLabel(): string
    {
        return __('currencies.currencies');
    }
}
