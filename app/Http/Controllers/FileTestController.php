<?php

namespace App\Http\Controllers;

use App\Facades\FileService;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Throwable;

class FileTestController extends Controller
{
    public function index()
    {
        return Inertia::render('FileTest', [
            'file' => auth()->user()->avatar?->getTemporaryUrl()
        ]);
    }

    /**
     * @throws Throwable
     */
    public function update(Request $request)
    {
        $file = $request->file('file');

        if ($file) {
            FileService::create(auth()->user(), $file, 'avatar');
        } else {
            FileService::delete(auth()->user()->avatar);
        }

        return redirect(route('file-test.update'));
    }
}
