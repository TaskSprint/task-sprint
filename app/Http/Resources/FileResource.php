<?php

namespace App\Http\Resources;

use App\Models\File;
use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

/** @mixin File */
class FileResource extends JsonResource
{
    public function toArray(Request $request): array
    {
        return [
            'id' => $this->id,
            'name' => $this->name,
            'mimeType' => $this->mime_type,
            'size' => $this->size,
            'path' => $this->path,
            'disk' => $this->disk,
            'fileableId' => $this->fileable_id,
            'fileableType' => $this->fileable_type,
            'createdAt' => $this->created_at,
            'updatedAt' => $this->updated_at,
            'temporaryUrl' => $this->getTemporaryUrl(),

            'user_id' => $this->user_id,

            'user' => new UserResource($this->whenLoaded('user')),
        ];
    }
}
