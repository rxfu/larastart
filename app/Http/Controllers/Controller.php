<?php

namespace App\Http\Controllers;

use Illuminate\Foundation\Auth\Access\AuthorizesRequests;
use Illuminate\Foundation\Bus\DispatchesJobs;
use Illuminate\Foundation\Validation\ValidatesRequests;
use Illuminate\Routing\Controller as BaseController;

class Controller extends BaseController
{
    use AuthorizesRequests, DispatchesJobs, ValidatesRequests;

    public function success($data = [], $code = 200)
    {
        return response()->json([
            'type' => 'success',
            'code' => $code,
            'message' => iconv('GBK', 'UTF-8', config('setting.code')[(int) $code]),
            'data' => $data,
        ]);
    }

    public function fail($code = 500, $data = [])
    {
        return response()->json([
            'type' => 'error',
            'code' => $code,
            'message' => iconv('GBK', 'UTF-8', config('setting.code')[(int) $code]),
            'data' => $data,
        ]);
    }

    public function warning($code = 400, $data = [])
    {
        return response()->json([
            'type' => 'warning',
            'code' => $code,
            'message' => iconv('GBK', 'UTF-8', config('setting.code')[(int) $code]),
            'data' => $data,
        ]);
    }

    public function info($code = 300, $data = [])
    {
        return response()->json([
            'type' => 'info',
            'code' => $code,
            'message' => iconv('GBK', 'UTF-8', onfig('setting.code')[(int) $code]),
            'data' => $data,
        ]);
    }
}
