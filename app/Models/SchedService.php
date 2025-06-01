<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class SchedService extends Model
{
    /** @use HasFactory<\Database\Factories\SchedServiceFactory> */
    use HasFactory;

     protected $fillable = [
        'frequency',
        'startdate',
        'days',
        'times',
        'notes'
    ];
}
