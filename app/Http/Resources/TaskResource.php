<?php

namespace App\Http\Resources;

use App\Models\Task;
use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

/** @mixin Task */
class TaskResource extends JsonResource
{
    public function toArray(Request $request): array
    {
        return [
            'id' => $this->id,
            'name' => $this->name,
            'description' => $this->description,
            'price' => $this->price,
            'address' => $this->address,
            'estimatedDate' => $this->estimated_date,
            'status' => $this->status,
            'createdAt' => $this->created_at,
            'updatedAt' => $this->updated_at,
            'currency' => new CurrencyResource($this->whenLoaded('currency')),
            'user' => new UserResource($this->whenLoaded('customer')),
            'subCategory' => new SubCategoryResource($this->whenLoaded('subCategory')),
        ];
    }
}
