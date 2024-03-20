<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Form;
use Inertia\Inertia;

class FormController extends Controller
{
    public function index()
    {
        $form = Form::all();
        
        return Inertia::render('Formulario/Form', [ 
            'form' => $form
        ]);
    }
}
