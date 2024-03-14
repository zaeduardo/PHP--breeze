<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Search;
use Inertia\Inertia;

class SearchController extends Controller
{
    public function index()
    {
        $search = Search::all();

        return Inertia::render('Search/All',[
            'search' => $search
        ]);
    }
}
