<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Spatie\Permission\Models\Permission;
use Spatie\Permission\Models\Role;
use Spatie\Permission\PermissionRegistrar;

class RolesAndPermissionsSeeder extends Seeder
{
    public function run(): void
    {
        app()[PermissionRegistrar::class]->forgetCachedPermissions();

        $permissions = [
            'view admin panel' => Permission::firstOrCreate(['name' => 'view admin panel']),
            'assign to tasks' => Permission::firstOrCreate(['name' => 'assign to tasks']),
            'category' => [
                'create' => Permission::firstOrCreate(['name' => 'create category']),
                'edit' => Permission::firstOrCreate(['name' => 'edit category']),
                'delete' => Permission::firstOrCreate(['name' => 'delete category']),
                'restore' => Permission::firstOrCreate(['name' => 'restore category']),
                'force delete' => Permission::firstOrCreate(['name' => 'force delete category']),
            ],
            'sub-category' => [
                'create' => Permission::firstOrCreate(['name' => 'create sub-category']),
                'edit' => Permission::firstOrCreate(['name' => 'edit sub-category']),
                'delete' => Permission::firstOrCreate(['name' => 'delete sub-category']),
                'restore' => Permission::firstOrCreate(['name' => 'restore sub-category']),
                'force delete' => Permission::firstOrCreate(['name' => 'force delete sub-category']),
            ],
            'currency' => [
                'create' => Permission::firstOrCreate(['name' => 'create currency']),
                'edit' => Permission::firstOrCreate(['name' => 'edit currency']),
                'delete' => Permission::firstOrCreate(['name' => 'delete currency']),
                'restore' => Permission::firstOrCreate(['name' => 'restore currency']),
                'force delete' => Permission::firstOrCreate(['name' => 'force delete currency']),
            ],
            'task' => [
                'safe' => [
                    'create' => Permission::firstOrCreate(['name' => 'create task']),
                    'edit' => Permission::firstOrCreate(['name' => 'edit task']),
                    'delete' => Permission::firstOrCreate(['name' => 'delete task']),
                ],
                'restore' => Permission::firstOrCreate(['name' => 'restore task']),
                'force edit' => Permission::firstOrCreate(['name' => 'force edit task']),
                'force delete' => Permission::firstOrCreate(['name' => 'force delete task']),
            ],
            'task order' => [
                'safe' => [
                    'create' => Permission::firstOrCreate(['name' => 'create task order']),
                    'edit' => Permission::firstOrCreate(['name' => 'edit task order']),
                    'delete' => Permission::firstOrCreate(['name' => 'delete task order']),
                ],
                'restore' => Permission::firstOrCreate(['name' => 'restore task order']),
                'force edit' => Permission::firstOrCreate(['name' => 'force edit task order']),
                'force delete' => Permission::firstOrCreate(['name' => 'force delete task order']),
            ],
            'user' => [
                'safe' => [
                    'edit' => Permission::firstOrCreate(['name' => 'edit user']),
                    'delete' => Permission::firstOrCreate(['name' => 'delete user']),
                ],
                'restore' => Permission::firstOrCreate(['name' => 'restore user']),
                'force edit' => Permission::firstOrCreate(['name' => 'force edit user']),
                'force delete' => Permission::firstOrCreate(['name' => 'force delete user']),
            ],
            'file' => [
                'safe' => [
                    'edit' => Permission::firstOrCreate(['name' => 'edit file']),
                    'delete' => Permission::firstOrCreate(['name' => 'delete file']),
                ],
                'restore' => Permission::firstOrCreate(['name' => 'restore file']),
                'force edit' => Permission::firstOrCreate(['name' => 'force edit file']),
                'force delete' => Permission::firstOrCreate(['name' => 'force delete file']),
            ],
            'keyword' => [
                'create' => Permission::firstOrCreate(['name' => 'create keyword']),
                'edit' => Permission::firstOrCreate(['name' => 'edit keyword']),
                'delete' => Permission::firstOrCreate(['name' => 'delete keyword']),
                'restore' => Permission::firstOrCreate(['name' => 'restore keyword']),
                'force delete' => Permission::firstOrCreate(['name' => 'force delete keyword']),
            ],
            'review' => [
                'safe' => [
                    'create' => Permission::firstOrCreate(['name' => 'create review']),
                    'edit' => Permission::firstOrCreate(['name' => 'edit review']),
                    'delete' => Permission::firstOrCreate(['name' => 'delete review']),
                ],
                'restore' => Permission::firstOrCreate(['name' => 'restore review']),
                'force edit' => Permission::firstOrCreate(['name' => 'force edit review']),
                'force delete' => Permission::firstOrCreate(['name' => 'force delete review']),
            ],
        ];

        // update cache to know about the newly created permissions (required if using WithoutModelEvents in seeders)
        app()[PermissionRegistrar::class]->forgetCachedPermissions();

        // create roles and assign created permissions
        $customer = Role::firstOrCreate(['name' => 'customer']);
        $customer->givePermissionTo($this->getSafePermissions($permissions));

        Role::firstOrCreate(['name' => 'employee'])
            ->givePermissionTo($customer->permissions)
            ->givePermissionTo($permissions['assign to tasks']);

        Role::firstOrCreate(['name' => 'admin'])
            ->givePermissionTo(Permission::all());
    }

    private function getSafePermissions(array $permissions, bool $isSafe = false): array
    {
        $safePermissions = [];
        foreach ($permissions as $key => $value) {
            if (is_array($value)) {
                $safePermissions = array_merge(
                    $safePermissions,
                    $this->getSafePermissions($value, $key === 'safe'));
            } else {
                if ($isSafe || $key === 'safe') {
                    $safePermissions[] = $value;
                }
            }
        }
        return $safePermissions;
    }
}
