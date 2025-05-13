<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;


class Role extends Model
{
    
    public $timestamps = false;

    protected $fillable = [
        "role_name",
        "abilities"
    ];

    public function user(): BelongsTo
    {
        return $this->belongsTo(User::class);
    }
}
