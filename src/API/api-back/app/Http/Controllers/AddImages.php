<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Image;

class AddImages extends Controller
{
    //
    public function addImages(Request $req){

            $image = new Image;
            $image->idUser = $req->input('idUser');
            $image->image_path = $req->file('file')->store('images');
            $image->description = $req->input('description');
            $image->save();

            return true;
    }

    public function imageList (Request $req)
    {
        return Image::orderBy('id', 'desc')->get();
    }

    public function delededImg (Request $req)
    {
       $img = Image::where('id', $req->id)->delete();

       if ($img) {
            return ["delete"=>true];
       } else {
         return ["delete"=>false];
       }
       
    }
}
