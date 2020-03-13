<?php

namespace App\Http\Controllers;

use Illuminate\Foundation\Auth\Access\AuthorizesRequests;
use Illuminate\Foundation\Bus\DispatchesJobs;
use Illuminate\Foundation\Validation\ValidatesRequests;
use Illuminate\Routing\Controller as BaseController;

class Controller extends BaseController
{
    use AuthorizesRequests, DispatchesJobs, ValidatesRequests;

    public function jsonResponse($type, $code, $data)
    {
        $status = substr($code, 0, 3);

        return response()->json([
            'status' => $status,
            'type' => $type,
            'code' => $code,
            'message' => config('setting.code')[(int) $code],
            'data' => $data,
        ], $status);
    }

    public function success($code = 200, $data = [])
    {
        return $this->jsonResponse('success', $code, $data);
    }

    public function fail($code = 500, $data = [])
    {
        return $this->jsonResponse('error', $code, $data);
    }

    public function warning($code = 400, $data = [])
    {
        return $this->jsonResponse('waring', $code, $data);
    }

    public function info($code = 300, $data = [])
    {
        return $this->jsonResponse('info', $code, $data);
    }
}
