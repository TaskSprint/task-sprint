<?php

namespace App\Http\Controllers\Auth;

use App\Facades\Models\UserService;
use App\Http\Controllers\Controller;
use App\Models\User;
use Exception;
use Illuminate\Auth\Events\Registered;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Validation\Rules;
use Illuminate\Validation\ValidationException;
use Inertia\Inertia;
use Inertia\Response;
use Throwable;

class RegisteredUserController extends Controller
{
    /**
     * Handle an incoming registration request.
     *
     * @throws ValidationException
     * @throws Throwable
     */
    public function store(Request $request): RedirectResponse
    {
        $validated = $request->validate([
            'name' => 'required|string|max:255',
            'email' => 'required|string|lowercase|email|max:255|unique:' . User::class,
            'password' => ['required', 'confirmed', Rules\Password::defaults()],
            'phone' => 'required|phone:INTERNATIONAL,UA|unique:' . User::class,
            'city' => 'required|string|max:255',
        ]);

        $user = UserService::create($validated);
        $user->givePermissionTo("edit user", "delete user");

        try {
            event(new Registered($user));
        } catch (Exception $e) {
            error_log($e->getMessage());
        }

        Auth::login($user);

        try {
            $user->assignRole('customer');
            $user->markEmailAsVerified();
        } catch (Exception $e) {
            error_log($e->getMessage());
        }

        return redirect(route('home', ['verified' => 1], absolute: false));
    }

    /**
     * Display the registration view.
     */
    public function create(): Response
    {
        return Inertia::render('Auth/Register');
    }
}
