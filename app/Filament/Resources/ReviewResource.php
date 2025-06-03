<?php

namespace App\Filament\Resources;

use App\Enums\TaskOrderStatus;
use App\Facades\Models\TaskOrderService;
use App\Filament\Resources\ReviewResource\Pages;
use App\Models\Review;
use App\Models\TaskOrder;
use Filament\Forms\Components\Grid;
use Filament\Forms\Components\Placeholder;
use Filament\Forms\Components\Section;
use Filament\Forms\Components\Select;
use Filament\Forms\Components\Textarea;
use Filament\Forms\Form;
use Filament\Resources\Resource;
use Filament\Tables\Actions\BulkActionGroup;
use Filament\Tables\Actions\DeleteAction;
use Filament\Tables\Actions\DeleteBulkAction;
use Filament\Tables\Actions\EditAction;
use Filament\Tables\Columns\TextColumn;
use Filament\Tables\Table;
use Mokhosh\FilamentRating\Columns\RatingColumn;
use Mokhosh\FilamentRating\Components\Rating;

class ReviewResource extends Resource
{
    protected static ?string $model = Review::class;

    protected static ?string $slug = 'reviews';

    protected static ?string $navigationIcon = 'heroicon-o-star';

    public static function form(Form $form): Form
    {
        return $form
            ->schema([
                Grid::make()
                    ->schema([
                        Select::make('task_order_id')
                            ->label('reviews.task_order')
                            ->translateLabel()
                            ->getSearchResultsUsing(fn(?string $search) => TaskOrderService::search($search, "task.name")
                                ->where('status', TaskOrderStatus::Completed)
                                ->with('task')
                                ->limit(50)
                                ->get()
                                ->pluck('task.name', 'task_id')
                            )
                            ->getOptionLabelUsing(fn($value) => TaskOrder::find($value)?->task->name)
                            ->searchable()
                            ->required(),
                        Rating::make('rating')
                            ->label('reviews.rating')
                            ->translateLabel()
                            ->default(5)
                            ->required(),
                        Textarea::make('content')
                            ->label('reviews.content')
                            ->translateLabel(),
                    ])->columnSpan(2),

                Section::make(fn() => __('reviews.meta'))
                    ->schema([
                        Placeholder::make('created_at')
                            ->label('reviews.created_at')
                            ->translateLabel()
                            ->content(fn(?Review $record): string => $record?->created_at?->diffForHumans() ?? '-'),

                        Placeholder::make('updated_at')
                            ->label('reviews.updated_at')
                            ->translateLabel()
                            ->content(fn(?Review $record): string => $record?->updated_at?->diffForHumans() ?? '-'),
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
                TextColumn::make('taskOrder.task.name')
                    ->label('reviews.task_order')
                    ->translateLabel()
                    ->searchable(),
                RatingColumn::make('rating')
                    ->label('reviews.rating')
                    ->translateLabel(),
                TextColumn::make('content')
                    ->label('reviews.content')
                    ->translateLabel()
                    ->limit(50)
                    ->searchable(),
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
            'index' => Pages\ListReviews::route('/'),
            'create' => Pages\CreateReview::route('/create'),
            'edit' => Pages\EditReview::route('/{record}/edit'),
        ];
    }

    public static function getGloballySearchableAttributes(): array
    {
        return ['taskOrder.task.name', 'content', 'rating'];
    }

    public static function getModelLabel(): string
    {
        return __('reviews.review');
    }

    public static function getPluralModelLabel(): string
    {
        return __('reviews.reviews');
    }

    public static function getNavigationGroup(): ?string
    {
        return __('tasks.tasks');
    }
}
