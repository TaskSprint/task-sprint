<?php

namespace App\Http\Resources;

use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

/** @mixin User */
class UserResource extends JsonResource
{
    public function toArray(Request $request): array
    {
        /** @noinspection PhpUndefinedMethodInspection */
        return [
            'id' => $this->id,
            'avatar' => $this->whenLoaded('avatar', fn() => $this->avatar?->getTemporaryUrl()),
            'name' => $this->name,
            'phone' => $this->phone->formatInternational(),
            'email' => $this->email,
            'city' => $this->city,
            'emailVerifiedAt' => $this->email_verified_at,
            'createdAt' => $this->created_at,
            'updatedAt' => $this->updated_at,
            'tasks' => TaskResource::collection($this->whenLoaded('tasks')),
        ];
    }
}
