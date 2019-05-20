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
		$network_id = $this->user()->getProfile('network_id')->value;

		$this->repository->where('network_id', $network_id);
		$this->repository->where('status', 'used');
		$this->repository->where('cancelled', 'FALSE');

		return $this->basic_get($request);
	}


	public function index_post(Request $request){

		$network_id = $this->user()->getProfile('network_id')->value;

		$this->repository->where('network_id', $network_id);
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
			$id = $rec->save();
			if($rec->mobile){
				$this->sendMessage($rec->mobile, $rec->code);
			}

		}catch(\Exception $e){
			return $this->respondError('We are unable to add a new voucher at this time, please try again later');
		}




		return $this->respondCreated('Voucher Created', $rec);

	}

	protected function sendMessage($to, $code){

		$apiKey = config('clickatell.api_key');

		if(!$apiKey){
			return;
		}

		$message = 'Your wifi voucher code for ' . $this->user()->getProfile('network_name')->value .' is: ' . $code;
		$message .= "\n\n" . 'Please enter the code EXACTLY as it appears on the wifi networks landing page.';
		$message .= "\nThank you";


		$endpoint = "https://platform.clickatell.com/messages/http/send";
		$client = new \GuzzleHttp\Client();

		try {
			$response = $client->request('GET', $endpoint, ['query' => [
				'apiKey' => 'ri_ADvN3RSCV6VSwkgCK7A==',
				'to' =>  $to,
				'content' => $message
			]]);


		}catch(\Exception $e){
			//dd($e->getMessage());
		}

		//dd($response);
	}

}
