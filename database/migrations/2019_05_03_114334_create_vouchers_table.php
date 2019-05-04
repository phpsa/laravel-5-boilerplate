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
			$table->string('cancelled');
			$table->string('code')->unique();
			$table->string('comment')->nullable();
			$table->unsignedInteger('down_limit');
			$table->unsignedInteger('duration');
			$table->unsignedInteger('max_users');
			$table->unsignedInteger('purge_days');
			$table->unsignedInteger('remaining');
			$table->unsignedInteger('status');
			$table->unsignedInteger('up_limit');
			$table->unsignedBigInteger('user_id')->nullable();
            $table->timestamps();
		});

		Schema::table('vouchers', function (Blueprint $table) {
            $table->foreign('user_id')->references('id')->on('users');
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
