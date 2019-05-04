<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use App\Models\Auth\User;

class UserProfile extends Model
{
	protected $table = 'user_profile';
	public $timestamps = false;

	public $profile_fields = [
		'api_key' => array (
			'label' => 'API KEY',
			'json' => false,
			'type' => 'text'
		),
		'api_secret' => array(
			'label' => 'API Secret',
			'json' => false,
			'type' => 'text'
		)
	];

	protected $fillable = [
		'user_id',
		'label',
		'value',
		'json'
	];


	public function user()
    {
        return $this->belongsTo(User::class);
	}

	public function getField( $key, $user_id){
		$record =  $this->firstOrNew(['user_id' => $user_id, 'label' => $key]);
		if($record && $record->json){
			$record->value = json_decode($record->value);
		}

		return $record;
	}

	public function getProfile($user_id){
		$items = $this->where('user_id',$user_id)->get();
		$fields = $this->profile_fields;
		foreach($fields as $key => &$data){
			$data['value'] = $this->getField($key, $user_id)->value;
		}
		return $fields;
	}
}
