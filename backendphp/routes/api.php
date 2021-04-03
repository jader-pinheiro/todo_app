<?php

header("Access-Control-Allow-Origin: http://localhost:8080");
header("Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept");
header('Access-Control-Allow-Methods: POST, GET, OPTIONS, PUT, DELETE');

use Illuminate\Http\Request;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/



Route::group(['prefix' => 'todos'], function()
{
    Route::get('', ['uses' => 'TodoController@allTodos']);

    Route::get('/get_desc={description}', ['uses' => 'TodoController@filterTodos']);

    Route::get('/get_key={id}', ['uses' => 'TodoController@getTodos']);

    Route::post('/description={description}', ['uses' => 'TodoController@saveTodos']);

    Route::put('/up_key={id}/done={done}', ['uses' => 'TodoController@updateTodos']);

    Route::delete('/del_key={id}', ['uses' => 'TodoController@deleteTodos']);
});



Route::get('/user', function (Request $request) {
    return $request->user();
})->middleware('auth:api');
