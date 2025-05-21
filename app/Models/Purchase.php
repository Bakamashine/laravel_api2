<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class Purchase extends Model
{
    
    protected $fillable = [
        'status'
    ];

    public function product(): BelongsTo
    {
        return $this->belongsTo(Product::class);
    }
    
    protected static function boot() {
        parent::boot();

        static::creating(function ($purchase) {
            $purchase->user_id = auth('sanctum')->user()->id;
        });
    }
}
