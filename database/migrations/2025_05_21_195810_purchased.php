<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration {
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create("purchases", function (Blueprint $blueprint) {
            $blueprint->id();
            $blueprint->foreignId("product_id")
                ->constrained("products")
                ->cascadeOnDelete();
            $blueprint->foreignId("user_id")
                ->constrained('users')
                ->cascadeOnDelete();
            $blueprint->string("status");
            $blueprint->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('purchases');
    }
};
