<?php

namespace App\Repositories;


use App\Repositories\BaseRepository;
use App\Models\Vouchers;
/**
 * Class PermissionRepository.
 */
class VoucherRepository extends BaseRepository
{
    /**
     * @return string
     */
    public function model()
    {
        return Vouchers::class;
    }
}
