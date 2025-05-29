<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Http\Request;
use Symfony\Component\HttpFoundation\Response;

class HttpsMiddleware
{
    /**
     * Handle an incoming request.
     *
     * @param Closure(Request): (Response) $next
     */
    public function handle(Request $request, Closure $next): Response
    {
        if (!$request->secure() && app()->isProduction() && str(config("app.url"))->startsWith('https://')) {
            return redirect()->secure($request->getRequestUri());
        }
        return $next($request);
    }
}
