<?php

namespace App\Http\Resources;

use App\Models\SubCategory;
use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

/** @mixin SubCategory */
class SubCategoryResource extends JsonResource
{
    public function toArray(Request $request): array
    {
        return [
            'id' => $this->id,
            'name' => $this->name,
            'createdAt' => $this->created_at,
            'updatedAt' => $this->updated_at,

            'category' => new CategoryResource($this->whenLoaded('category')),
            'tasks' => TaskResource::collection($this->whenLoaded('tasks')),

            // SubCategory компонент
            // Передаём нужные данные для Sidebar
            'total' => $this->tasks->count(),

            'categories' => [
                [
                    'title' => 'Домашній майстер',
                    'children' => [
                        'Сантехнік',
                        'Електрик',
                        'Чоловік на годину',
                        'Столяр',
                        'Слюсар',
                        'Установка побутової техніки',
                        'Інші послуги майстра',
                    ],
                ],
                'Ремонт техніки',
                'Дизайн',
                'Транспортування',
                'Побутові послуги',
                'Фото і відео',
                'Послуги для тварин',
                'Організація свят',
            ],

            'tags' => [
                'Монтаж сантехніки',
                'Зробити ключі',
                'Монтаж сушарок для білизни',
                'Провести проводку',
                'Встановити плафон',
                'Ремонт туалету',
            ],
        ];
    }
}
