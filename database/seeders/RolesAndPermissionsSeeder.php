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

        // create permissions
        Permission::firstOrCreate(['name' => 'assign to tasks']);

        // update cache to know about the newly created permissions (required if using WithoutModelEvents in seeders)
        app()[PermissionRegistrar::class]->forgetCachedPermissions();


        // create roles and assign created permissions
        $customer = Role::firstOrCreate(['name' => 'customer']);

        Role::firstOrCreate(['name' => 'employee'])
            ->givePermissionTo($customer->permissions)
            ->givePermissionTo('assign to tasks');

        Role::firstOrCreate(['name' => 'admin'])
            ->givePermissionTo(Permission::all());
    }
}
