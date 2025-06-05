<?php

namespace App\Http\Resources;

use App\Models\TaskOrder;
use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

/** @mixin TaskOrder */
class TaskOrderResource extends JsonResource
{
    public function toArray(Request $request): array
    {
        return [
            'status' => $this->status,
            'createdAt' => $this->created_at,
            'updatedAt' => $this->updated_at,

            'taskId' => $this->task_id,
            'employeeId' => $this->employee_id,

            'employee' => new UserResource($this->whenLoaded('employee')),
            'review' => new ReviewResource($this->whenLoaded('review')),
            'task' => new TaskResource($this->whenLoaded('task')),
        ];
    }
}
