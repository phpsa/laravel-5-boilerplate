<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateVouchersTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {


		Schema::create('vouchers', function (Blueprint $table) {
            $table->bigIncrements('id');
            $table->unsignedBigInteger('user_id')->nullable();
            $table->enum('cancelled', ['TRUE', 'FALSE']);
            $table->string('code', 50)->default('');
            $table->string('comment', 255)->nullable();
            $table->unsignedInteger('down_limit')->nullable();
            $table->unsignedInteger('duration')->nullable();
            $table->unsignedInteger('max_users')->nullable();
            $table->unsignedInteger('purge_days')->nullable();
            $table->unsignedInteger('remaining')->nullable();
            $table->enum('status', ['used', 'unused']);
            $table->string('tx_ids', 255)->nullable();
            $table->unsignedInteger('type')->nullable();
            $table->unsignedInteger('up_limit')->nullable();
            $table->string('users', 255)->nullable();
            $table->nullableTimestamps();

            $table->unique('code', 'code');
            $table->index('status', 'status');

            $table->foreign('user_id', 'vouchers_user_id_foreign')->references('id')->on('users')->onDelete('RESTRICT
')->onUpdate('RESTRICT');

        });

    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('vouchers');
    }
}
