<?php

namespace App\Exceptions;

use Exception;
use Illuminate\Validation\ValidationException;

class ApiException extends Exception
{
    protected $exception;

    public function __construct($code = 500, $exception = null)
    {
        $this->exception = $exception;

        if (!is_null($this->exception)) {
            $message = iconv('GBK', 'UTF-8', __($this->exception->getMessage()));
        } else {
            $message = config('setting.code')[(int) $code];
        }

        parent::__construct($message, $code);
    }

    /**
     * Report or log an exception.
     *
     * @return void
     */
    public function report()
    {
        // $content = [
        //     'message' => $this->getMessage(),
        //     'exception' => $this->exception->getMessage(),
        // ];
    }

    /**
     * Render an exception into an HTTP response.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function render($request)
    {
        // if (config('app.debug')) {
        //     $this->message = $this->exception->getMessage();
        // }

        $status = substr($this->getCode(), 0, 3);
        $errors = [];

        if ($this->exception instanceof ValidationException) {
            $errors = $this->exception->validator->errors();
        }

        $content = [
            'status' => $status,
            'type' => 'error',
            'code' => $this->getCode(),
            'message' => $this->getMessage(),
            'errors' => $errors,
        ];

        return response()->json($content, $status);
    }
}
