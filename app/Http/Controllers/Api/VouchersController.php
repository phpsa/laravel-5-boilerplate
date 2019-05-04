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
		$this->repository->where('status', 'used');
		$this->repository->where('cancelled', 'FALSE');



		return $this->basic_get($request);
	}


	public function index_post(Request $request){
		$this->repository->where('user_id', $this->user()->id);
		$this->repository->where('status', 'unused');
		$this->repository->where('duration', $request->input('duration'));
		$this->repository->where('cancelled', 'FALSE');
		$this->repository->limit(1);
		$this->repository->orderBy('id', 'asc');
		$rec = $this->repository->get()->first();

		if(!$rec){
			return $this->respondError('We are unable to add a new voucher at this time, please try again later');
		}

		$rec->status = 'used';
		$rec->comment = $request->input('comment');
		$rec->mobile = $request->input('phone');
		try {
			$rec->save();

		}catch(\Exception $e){
			return $this->respondError('We are unable to add a new voucher at this time, please try again later');
		}




		return $this->respondCreated('Voucher Created', ['id' => $rec->id]);

	}

	protected function sendMessage($to, $message){

		$apiKey = config('clickatell.api_key');

		if(!$apiKey){
			return;
		}
		//curl "?apiKey=ri_ADvN3RSCV6VSwkgCK7A==&to=27847244333&content=Test+message+text"

		$endpoint = "https://platform.clickatell.com/messages/http/send";
		$client = new \GuzzleHttp\Client();


		try {
			$response = $client->request('GET', $endpoint, ['query' => [
				'apiKey' => $apiKey,
				'to' =>  $to,
				'content' => $message
			]]);

		}catch(\Exception $e){

		}
	}

}
