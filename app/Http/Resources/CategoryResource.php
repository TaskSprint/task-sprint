<?php

namespace App\Http\Resources;

use App\Models\Category;
use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

/** @mixin Category */
class CategoryResource extends JsonResource
{
    public function toArray(Request $request): array
    {
        return [
            'id' => $this->id,
            'name' => $this->name,
            'color' => $this->color,
            'createdAt' => $this->created_at,
            'updatedAt' => $this->updated_at,
            'icon' => $this->whenLoaded('icon', fn() => $this->icon?->mime_type === "image/svg+xml"
                ? $this->icon?->getText()
                : $this->icon?->getTemporaryUrl()),
        ];
    }
}
