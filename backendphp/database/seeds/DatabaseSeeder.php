<?php

use Illuminate\Database\Seeder;
use App\todoApp;

class DatabaseSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        // $this->call(UsersTableSeeder::class);
        todoApp::create([
            "description"=>"testando1 laravel",
            "done"=>0,
        ]);

        todoApp::create([
            "description"=>"testando2 react",
            "done"=>0,
        ]);

        echo "Registros criados";


    }
}
