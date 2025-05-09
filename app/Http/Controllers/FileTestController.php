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
    public function store(Request $request)
    {
        $file = $request->file('file');

        if ($file) {
            FileService::create(auth()->user()->avatar(), $file);
        } else {
            auth()->user()->avatar?->delete();
        }

        return redirect(route('file-test.index'));
    }
}
