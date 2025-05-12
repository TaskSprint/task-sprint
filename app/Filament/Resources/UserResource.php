<?php

namespace App\Filament\Resources;

use App\Enums\Roles;
use App\Filament\Resources\UserResource\Pages;
use App\Models\User;
use Awcodes\FilamentBadgeableColumn\Components\Badge;
use Awcodes\FilamentBadgeableColumn\Components\BadgeableColumn;
use Filament\Forms\Components\FileUpload;
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
use Filament\Tables\Columns\ImageColumn;
use Filament\Tables\Columns\TextColumn;
use Filament\Tables\Table;
use Illuminate\Contracts\Support\Htmlable;
use Illuminate\Database\Eloquent\Model;
use Livewire\Features\SupportFileUploads\FileUploadConfiguration;

class UserResource extends Resource
{
    protected static ?string $model = User::class;

    protected static ?string $slug = 'users';

    protected static ?string $navigationIcon = 'heroicon-o-user';

    public static function form(Form $form): Form
    {
        return $form
            ->schema([
                Grid::make()
                    ->schema([
                        FileUpload::make('avatar')
                            ->label('users.avatar')
                            ->translateLabel()
                            ->disk(FileUploadConfiguration::disk())
                            ->directory(FileUploadConfiguration::path())
                            ->storeFiles(false)
                            ->visibility('private')
                            ->avatar()
                            ->columnSpan(2),

                        TextInput::make('name')
                            ->label('users.name')
                            ->translateLabel()
                            ->required(),

                        TextInput::make('email')
                            ->label('users.email')
                            ->email()
                            ->unique()
                            ->translateLabel()
                            ->required(),

                        TextInput::make('phone')
                            ->label('users.phone')
                            ->translateLabel()
                            ->tel()
                            ->unique()
                            ->required(),

                        TextInput::make('city')
                            ->label('users.city')
                            ->translateLabel()
                            ->required(),

                        Select::make('roles')
                            ->label('users.roles')
                            ->multiple()
                            ->translateLabel()
                            ->options(Roles::class)
                            ->default('user'),

                        Section::make(fn() => __('users.password'))
                            ->description(fn(string $context) => $context === 'create'
                                ? null
                                : __('users.dont_fill_to_preserve'))
                            ->schema([
                                TextInput::make('password')
                                    ->label('users.password')
                                    ->translateLabel()
                                    ->password()
                                    ->revealable()
                                    ->required(fn(string $context) => $context === 'create'),

                                TextInput::make('password_confirmation')
                                    ->label('users.password_confirmation')
                                    ->translateLabel()
                                    ->password()
                                    ->revealable()
                                    ->required(fn(string $context) => $context === 'create')
                                    ->same('password'),
                            ]),
                    ])->columnSpan(2),

                Section::make(fn() => __('users.meta'))
                    ->schema([
                        Placeholder::make('created_at')
                            ->label('users.created_at')
                            ->translateLabel()
                            ->content(fn(?User $record): string => $record?->created_at?->diffForHumans() ?? '-'),

                        Placeholder::make('updated_at')
                            ->label('users.updated_at')
                            ->translateLabel()
                            ->content(fn(?User $record): string => $record?->updated_at?->diffForHumans() ?? '-'),

                        Placeholder::make('email_verified_at')
                            ->label('users.email_verified_at')
                            ->translateLabel()
                            ->content(fn(?User $record): string => $record?->email_verified_at?->diffForHumans() ?? '-'),
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
                ImageColumn::make('avatar')
                    ->label('users.avatar')
                    ->translateLabel()
                    ->getStateUsing(fn(User $record) => $record->getFilamentAvatarUrl() ??
                        "https://ui-avatars.com/api/?background=random&name=$record->name")
                    ->size(50)
                    ->circular(),

                BadgeableColumn::make('name')
                    ->label('users.name')
                    ->translateLabel()
                    ->suffixBadges(fn(?User $record) => $record?->roles
                        ->map(fn($role) => Roles::from($role->name))
                        ->map(fn($role) => Badge::make($role->getLabel())
                            ->color($role->getColor()))
                        ->toArray()
                    )
                    ->searchable()
                    ->sortable(),

                TextColumn::make('email')
                    ->label('users.email')
                    ->translateLabel()
                    ->searchable()
                    ->sortable(),

                TextColumn::make('phone')
                    ->label('users.phone')
                    ->translateLabel()
                    ->formatStateUsing(fn($state) => $state->formatInternational())
                    ->searchable()
                    ->sortable(),

                TextColumn::make('city')
                    ->label('users.city')
                    ->translateLabel()
                    ->searchable()
                    ->sortable(),

                TextColumn::make('email_verified_at')
                    ->label('users.email_verified_at')
                    ->translateLabel()
                    ->icon('heroicon-o-check-circle')
                    ->iconColor('success')
                    ->date(),
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
            'index' => Pages\ListUsers::route('/'),
            'create' => Pages\CreateUser::route('/create'),
            'edit' => Pages\EditUser::route('/{record}/edit'),
        ];
    }

    public static function getGlobalSearchResultTitle(Model $record): string|Htmlable
    {
        return $record->name;
    }

    public static function getGloballySearchableAttributes(): array
    {
        return ['name', 'email'];
    }

    public static function getGlobalSearchResultDetails(Model $record): array
    {
        return [
            __('users.email') => $record->email
        ];
    }

    public static function getModelLabel(): string
    {
        return __('users.user');
    }

    public static function getPluralModelLabel(): string
    {
        return __('users.users');
    }
}
