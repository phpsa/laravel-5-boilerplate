<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Api\Controller;
use App\Repositories\VoucherRepository;
use Illuminate\Http\Request;
use \Illuminate\Http\Response as Res;








/**
 * Class UpdatePasswordController.
 */
class VouchersController extends Controller
{

    /**
     * ChangePasswordController constructor.
     *
     * @param voucherRepository $voucherRepository
     */
    public function __construct(VoucherRepository $voucherRepository)
    {
		$this->repository = $voucherRepository;
	}





    public function index_get(Request $request){
		$this->repository->where('user_id', $this->user()->id);
		$this->repository->where('status', 1);
		return $this->basic_get($request);
	}


	public function issue_post(Request $request){
		$this->repository->where('user_id', $this->user()->id);
		$this->repository->where('status', 0);
		$time = $request->input('time');
		//issue and respond with the id
	}
}
