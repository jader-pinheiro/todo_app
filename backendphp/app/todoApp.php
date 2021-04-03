<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class todoApp extends Model
{
    protected $fillables = [
        'description, done'
    ];
}

