<?php

namespace App\Exceptions;

use Exception;

class ApiException extends Exception
{
    protected $exception;

    public function __construct($message, $exception = null, $code = 500)
    {
        $this->exception = $exception;
        $message = 'API 错误：' . $message;

        parent::__construct($message, $code);
    }

    /**
     * Report or log an exception.
     *
     * @return void
     */
    public function report()
    {
        $content = [
            'message' => $this->getMessage(),
            'exception' => $this->exception->getMessage(),
        ];
    }

    /**
     * Render an exception into an HTTP response.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function render($request)
    {
        if (config('app.debug')) {
            $this->message = $this->exception->getMessage();
        }

        $content = [
            'type' => 'error',
            'code' => $this->code,
            'message' => iconv('GBK', 'UTF-8', __($this->message)),
        ];

        return response()->json($content);
    }
}
