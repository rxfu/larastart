<?php

namespace App\Http\Controllers\Api;

use Carbon\Carbon;
use Illuminate\Http\Request;
use App\Exceptions\ApiException;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Auth;
use Illuminate\Database\QueryException;
use Illuminate\Validation\ValidationException;

class LoginController extends Controller
{
    public function login(Request $request)
    {
        try {
            $request->validate([
                'username' => 'required|string',
                'password' => 'required|string',
                'remember_me' => 'boolean',
            ]);

            $credential = $request->only('username', 'password');

            if (!Auth::attempt($credential)) {
                return $this->fail(401);
            }

            $user = $request->user();
            $tokenResult = $user->createToken('Personal Access Token');
            $token = $tokenResult->token;

            if ($request->remember_me) {
                $token->expired_at = Carbon::now()->addWeek(1);
            }

            $token->save();

            return response()->json([
                'accessToken' => $tokenResult->accessToken,
                'token_type' => 'Bearer',
                'expired_at' => Carbon::parse($token->expired_at)->toDateTimeString(),
                200,
            ]);
        } catch (ValidationException $exception) {
            throw new ApiException('验证错误', $exception);
        } catch (QueryException $exception) {
            throw new ApiException('数据库错误', $exception);
        }
    }

    public function logout(Request $request)
    {
        if (Auth::check()) {
            $request->user()->token()->revoke();
        }

        return response()->json([
            'message' => '退出成功',
            200,
        ]);
    }
}
