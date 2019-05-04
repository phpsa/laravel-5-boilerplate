<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller as MainController;
use Illuminate\Http\Request;
use \Illuminate\Http\Response as Res;
use App\Helpers\General\UriParser;



class Controller extends MainController {

	/**
	* @var VoucherRepository
	*/
   protected $repository;

   protected $request;

   /**
	* @var int
	*/
   protected $statusCode = Res::HTTP_OK;


   protected function parseRequest($request){
	return New UriParser($request);
   }


   /**
	* @return mixed
	*/
   public function getStatusCode()
   {
	   return $this->statusCode;
   }
   /**
	* @param $message
	* @return json Res
	*/
   public function setStatusCode($statusCode)
   {
	   $this->statusCode = $statusCode;
	   return $this;
   }


   public function respondCreated($message, $data=null){
	   return $this->respond([
		   'status' => 'success',
		   'status_code' => Res::HTTP_CREATED,
		   'message' => $message,
		   'data' => $data
	   ]);
   }

   /**
	* @param Paginator $paginate
	* @param $data
	* @return mixed
	*/
   protected function respondWithPagination(Paginator $paginate, $data, $message){
	   $data = array_merge($data, [
		   'paginator' => [
			   'total_count'  => $paginate->total(),
			   'total_pages' => ceil($paginate->total() / $paginate->perPage()),
			   'current_page' => $paginate->currentPage(),
			   'limit' => $paginate->perPage(),
		   ]
	   ]);
	   return $this->respond([
		   'status' => 'success',
		   'status_code' => Res::HTTP_OK,
		   'message' => $message,
		   'data' => $data
	   ]);
   }

   protected function respond($data, $headers = []){
	   return response()->json($data, $this->getStatusCode(), $headers);
   }

   /**
	* Check if the user has one or more roles
	*
	* @param mixed $role role name or array of role names
	*
	* @return bool
	* @author Craig Smith <craig.smith@customd.com>
	* @copyright 2018 Custom D
	* @since 1.0.0
	*/
   protected function hasRole($role){
	   return $this->user() && $this->user()->hasRole($role);
   }

   /**
	* Checks if user has all the passed roles
	*
	* @param array $roles
	*
	* @return bool
	* @author Craig Smith <craig.smith@customd.com>
	* @copyright 2018 Custom D
	* @since 1.0.0
	*/
   protected function hasAllRoles($roles){
	   return $this->user() && $this->user()->hasRole($roles, true);
   }

   protected function user(){
	   return auth()->user();
   }


   public function basic_get(Request $request){


	 	$req = $this->parseRequest($request);

		$where = $req->whereParameters();

	   $fields = empty($request->input('fields')) ? ['*'] : explode(",", $request->input('fields'));
	   $with = $request->input('with');
	  // $where = $request->input('where');
	   $limit = $request->input('limit');
	   $offset = $request->input('offset');
	   $paginate = $request->input('paginate');

	   if($with !== NULL){
		   $this->repository->with(explode("," , $with));
	   }

	   if($where){
		   foreach($where as $whr){
			   switch($whr['type']){
				   case "In":
				   	$this->repository->whereIn($whr['key'], $whr['values']);
				   break;
				   case "NotIn":
				   $this->repository->whereNotIn($whr['key'], $whr['values']);
				   break;
				   case "Basic":
				   $this->repository->where($whr['key'], $whr['value'],$whr['operator']);
				   break;
			   }
		   }
	   }

	   $data = $this->repository->get($fields);


	   return $this->respond(['result' => 'success', 'data' => $data]);

   }


   /*

   protected function basic_get(){
	   get
paginate
limit
orderBy
where
whereIn
with
   }

   */
}