<?php

namespace App\Http\Requests;

use App\Models\Task;
use Illuminate\Foundation\Http\FormRequest;

class TaskPostRequest extends FormRequest
{
    public function rules(): array
    {
        return [
            'name' => ['required'],
            'description' => ['required'],
            'secret_description' => ['nullable'],
            'payment_details' => ['nullable'],
            'price' => ['required', 'numeric'],
            'currency_code' => ['required', 'exists:currencies,code'],
            'address' => ['required'],
            'address.region' => ['required'],
            'address.city' => ['required'],
            'address.street' => ['required'],
            'address.building' => ['required'],
            'address.details' => ['nullable'],
            'estimated_date' => ['required', 'date'],
            'sub_category_id' => ['required', 'exists:sub_categories,id'],
            'employee_id' => ['nullable', 'exists:users,id'],
            'files.*' => ['nullable', 'file', 'max:5120'],
        ];
    }

    public function authorize(): bool
    {
        return $this->user()->can('create', Task::class);
    }
}
