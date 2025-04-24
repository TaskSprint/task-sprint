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
                'create category' => Permission::firstOrCreate(['name' => 'create category']),
                'edit category' => Permission::firstOrCreate(['name' => 'edit category']),
                'delete category' => Permission::firstOrCreate(['name' => 'delete category']),
                'restore category' => Permission::firstOrCreate(['name' => 'restore category']),
                'force delete category' => Permission::firstOrCreate(['name' => 'force delete category']),
            ],
            'sub-category' => [
                'create sub-category' => Permission::firstOrCreate(['name' => 'create sub-category']),
                'edit sub-category' => Permission::firstOrCreate(['name' => 'edit sub-category']),
                'delete sub-category' => Permission::firstOrCreate(['name' => 'delete sub-category']),
                'restore sub-category' => Permission::firstOrCreate(['name' => 'restore sub-category']),
                'force delete sub-category' => Permission::firstOrCreate(['name' => 'force delete sub-category']),
            ],
            'currency' => [
                'create currency' => Permission::firstOrCreate(['name' => 'create currency']),
                'edit currency' => Permission::firstOrCreate(['name' => 'edit currency']),
                'delete currency' => Permission::firstOrCreate(['name' => 'delete currency']),
                'restore currency' => Permission::firstOrCreate(['name' => 'restore currency']),
                'force delete currency' => Permission::firstOrCreate(['name' => 'force delete currency']),
            ],
            'task' => [
                'safe' => [
                    'create task' => Permission::firstOrCreate(['name' => 'create task']),
                    'edit task' => Permission::firstOrCreate(['name' => 'edit task']),
                    'delete task' => Permission::firstOrCreate(['name' => 'delete task']),
                ],
                'restore task' => Permission::firstOrCreate(['name' => 'restore task']),
                'force edit task' => Permission::firstOrCreate(['name' => 'force edit task']),
                'force delete task' => Permission::firstOrCreate(['name' => 'force delete task']),
            ],
            'task order' => [
                'safe' => [
                    'create task order' => Permission::firstOrCreate(['name' => 'create task order']),
                    'edit task order' => Permission::firstOrCreate(['name' => 'edit task order']),
                    'delete task order' => Permission::firstOrCreate(['name' => 'delete task order']),
                ],
                'restore task order' => Permission::firstOrCreate(['name' => 'restore task order']),
                'force edit task order' => Permission::firstOrCreate(['name' => 'force edit task order']),
                'force delete task order' => Permission::firstOrCreate(['name' => 'force delete task order']),
            ],
            'user' => [
                'safe' => [
                    'edit user' => Permission::firstOrCreate(['name' => 'edit user']),
                    'delete user' => Permission::firstOrCreate(['name' => 'delete user']),
                ],
                'restore user' => Permission::firstOrCreate(['name' => 'restore user']),
                'force edit user' => Permission::firstOrCreate(['name' => 'force edit user']),
                'force delete user' => Permission::firstOrCreate(['name' => 'force delete user']),
            ],
            'file' => [
                'safe' => [
                    'edit file' => Permission::firstOrCreate(['name' => 'edit file']),
                    'delete file' => Permission::firstOrCreate(['name' => 'delete file']),
                ],
                'restore file' => Permission::firstOrCreate(['name' => 'restore file']),
                'force edit file' => Permission::firstOrCreate(['name' => 'force edit file']),
                'force delete file' => Permission::firstOrCreate(['name' => 'force delete file']),
            ]
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
