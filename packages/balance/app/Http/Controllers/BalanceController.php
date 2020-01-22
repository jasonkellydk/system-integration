<?php

namespace App\Http\Controllers;

use Exception;
use Firebase\JWT\JWT;
use Illuminate\Http\Request;

class BalanceController extends Controller
{
    public function all(Request $request)
    {
        try {
            $authToken = $request->header('Authentication');

            // Pretty unsecure way of authentication.. :)
            $tks = explode('.', $authToken);
            $content = JWT::urlsafeB64Decode($tks[1]);

            $user = json_decode($content);

            if ($user->email !== 'a@a.com') {
                return response()->json([
                    'error' => 'not authenticated'
                ]);
            }

            return response()->json([
                'balance' => 10
            ]);
        } catch (Exception $exception) {
            return response()->json([
                'error' => 'not authenticated'
            ]);
        }
    }
}
