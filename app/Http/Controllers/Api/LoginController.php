<?php

namespace App\Http\Controllers\Api;

use Carbon\Carbon;
use Illuminate\Http\Request;
use App\Exceptions\ApiException;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Auth;
use Illuminate\Database\QueryException;
use Illuminate\Validation\ValidationException;
use Symfony\Component\HttpFoundation\Response;

class LoginController extends Controller
{
    public function login(Request $request)
    {
        try {
            $request->validate([
                'username' => 'required|string',
                'password' => 'required|string|min:8',
                'remember_me' => 'boolean',
            ]);

            $credentials = $request->only('username', 'password');

            if (!Auth::attempt($credentials)) {
                throw new ApiException(401001);
            }

            $user = $request->user();
            $token = $user->createToken('Larastart')->accesstoken;

            // if ($request->remember_me) {
            //     $token->expired_at = Carbon::now()->addWeek(1);
            // }

            $token->save();
            $data = [
                'token' => $token,
            ];

            return $this->success(200001, $data);
        } catch (ValidationException $exception) {
            throw new ApiException(500, $exception);
        } catch (QueryException $exception) {
            throw new ApiException(500, $exception);
        }
    }

    public function logout(Request $request)
    {
        if (Auth::check()) {
            $request->user()->token()->revoke();
        } else {
            throw new ApiException(401002);
        }

        return $this->success(200002);
    }
}
