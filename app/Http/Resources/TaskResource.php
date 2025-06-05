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
            'secretDescription' => $this->secret_description,
            'paymentDetails' => $this->payment_details,
            'price' => $this->price,
            'address' => $this->address,
            'estimatedDate' => $this->estimated_date,
            'status' => $this->status,
            'negotiable' => $this->negotiable,
            'createdAt' => $this->created_at,
            'updatedAt' => $this->updated_at,
            'files' => $this->whenLoaded('files', function () {
                return $this->files->map(fn($file) => $file->getTemporaryUrl())->toArray();
            }),
            'images' => $this->whenLoaded('files', function () {
                return $this->files
                    ->filter(fn($file) => str($file->mime_type)->startsWith("image/"))
                    ->map(fn($file) => $file->getTemporaryUrl())
                    ->toArray();
            }),
            'currency' => new CurrencyResource($this->whenLoaded('currency')),
            'user' => new UserResource($this->whenLoaded('customer')),
            'subCategory' => new SubCategoryResource($this->whenLoaded('subCategory')),
            'order' => new TaskOrderResource($this->whenLoaded('order')),
        ];
    }
}
