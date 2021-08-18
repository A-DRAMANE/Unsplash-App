<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\User;

class AddUser extends Controller
{
    //
    public function register(Request $req){

        $check = User::where('name',$req->name)->first();

        if ($check) {

            return ["error"=>"Le nom d'utilisateur est deja utiliser, choisir un autre.",
            "success"=>false];
        }else {

            $user = new User;
            $user->mail = $req->input('mail');
            $user->pass = $req->input('pass');
            $user->name = $req->input('name');
            $user->save();

            return ["success"=>true,"result"=>$user];
        }
    }

    public function logIn(Request $req)
    {
        $user = User::where('name',$req->name)->first();

        if (!$user || $user->pass !== $req->pass ) {

            return ["error"=>"Le nom d'utilisateur ou le mot de passe n'est pas correcte.",
            "success"=>false];
        }
        return ["success"=>true,"result"=>$user];
    }

    public function users(Request $req)
    {
        $user = User::orderBy('id', 'desc')->get(["id","name"]);
        return $user;
    }
}
