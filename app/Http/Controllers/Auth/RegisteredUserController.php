<?php

namespace App\Http\Controllers\Auth;

use App\Facades\Models\UserService;
use App\Http\Controllers\Controller;
use App\Models\User;
use Illuminate\Auth\Events\Registered;
use Illuminate\Auth\Events\Verified;
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

        event(new Registered($user));

        Auth::login($user);

        if ($user->markEmailAsVerified()) {
            $user->assignRole('customer');
            event(new Verified($user));
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
