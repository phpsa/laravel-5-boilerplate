<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use App\Models\Auth\User;

class UserProfile extends Model
{
	protected $table = 'user_profile';
	public $timestamps = false;

	public static $profile_fields = [
		'network_id' => array (
			'label' => 'Network Id',
			'json' => false,
			'type' => 'text'
		),
		'account_id' => array(
			'label' => 'Account Id',
			'json' => false,
			'type' => 'text'
		),
		'network_name' => array(
			'label' => 'Network Name',
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

	public static function getField( $key, $user_id){
		$record =  self::firstOrNew(['user_id' => $user_id, 'label' => $key]);
		if($record && $record->json){
			$record->value = json_decode($record->value);
		}

		return $record;
	}

	public static function getProfile($user_id){
		$items = self::where('user_id',$user_id)->get();
		$fields = self::$profile_fields;
		foreach($fields as $key => &$data){
			$data['value'] = self::getField($key, $user_id)->value;
		}
		return $fields;
	}
}
