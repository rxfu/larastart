<?php

namespace App\Response;

trait ResponseJson
{
    private function jsonResponse($type, $code, $data, $message)
    {
        $status = substr($code, 0, 3);

        return response()->json([
            'status' => $status,
            'type' => $type,
            'code' => $code,
            'message' => $message ?? config('setting.code')[(int) $code],
            'data' => $data,
        ], $status);
    }

    public function success($code = 200, $data = [], $message = null)
    {
        return $this->jsonResponse('success', $code, $data, $message);
    }

    public function fail($code = 500, $data = [], $message = null)
    {
        return $this->jsonResponse('error', $code, $data, $message);
    }

    public function warning($code = 400, $data = [], $message = null)
    {
        return $this->jsonResponse('waring', $code, $data, $message);
    }

    public function info($code = 300, $data = [], $message = null)
    {
        return $this->jsonResponse('info', $code, $data, $message);
    }
}
