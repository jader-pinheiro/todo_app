<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Carbon\Carbon;



class TodoController extends Controller
{


    public function allTodos()
    {

            $query = DB::table('todo_apps')->select('*')
                                           ->orderBy('id', 'desc')
                                           ->get();

            return $query;



    }

    public function filterTodos($description)
    {

            $query = DB::table('todo_apps')->select('*')
                ->where('description', 'like', "$description%")

                ->get();

            return $query;


    }

    public function getTodos($id)
    {

        $query = DB::table('todo_apps')->select('*')
                                       ->where('id', $id)
                                       ->orderBy('id', 'asc')
                                       ->get();

        return $query;
    }

    public function saveTodos($description)
    {

        $date = Carbon::now('America/Sao_Paulo');

        DB::table('todo_apps')->insert([
               ['id' => null,
                'description' => $description,
                'done' => 0,
                'created_at' => $date,
                'updated_at' => $date]
        ]);


    }

    public function updateTodos($id, $done)
    {
        Db::table('todo_apps')->where('id', $id)
                              ->update(['done' => $done]);
    }

    public function deleteTodos($id)
    {
        DB::table('todo_apps')->where('id', $id)->delete();
    }
}
