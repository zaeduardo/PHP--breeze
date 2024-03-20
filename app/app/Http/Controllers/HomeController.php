<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Home;
use Inertia\Inertia;

class HomeController extends Controller
{
    public function index()
    {
        $home = Home::all();
        
        return Inertia::render('Home/Home', [
            'home' => $home
        ]);
    }
}
