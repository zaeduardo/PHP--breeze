<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class PageOneController extends Controller
{
    public function index(): View
    {
        return view('page-one');
    }

}
