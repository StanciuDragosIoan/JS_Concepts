<?php

//INHERITANCE (the sub-class depends on the parent class and if we modify the parent class all the sub-classes get modified - > that s BAD)
// class Vehicle
// {
//     public function move()
//     {
//         var_dump('moving..');
//     }
// }

// class car extends Vehicle
// {
//     public function accelerate()
//     {
//         $this->move();
//     }
// }

// (new car)->move();



//COMPOSITION
class Vehicle
{
    public function move()
    {
        var_dump('moving..');
    }
}


class Plane extends Vehicle
{
    public function move()
    {
        var_dump('plane flying..');
    }
} 

class Train extends Vehicle{
    public function move(){
        var_dump('train moving...');
    }
}


class Bike{
    public function move(){
        var_dump('Bike moving...');
    }
}



//car doesn't extend Vehicle anymore
class Car{      
    //declare as public property 
    public $vehicle;
    public $bike;

    //inject Vehicle class instance in car class constructor
    public function __construct(Vehicle $vehicle, Bike $bike)
    {   
        var_dump('construct');
        //assign public property $vehicle to the Vehicle class instance injected in constructor
        $this->vehicle = $vehicle;
        $this->bike = $bike;
    }


    public function accelerate()
    {
        var_dump('test');
        $this->vehicle->move();
        $this->bike->move();
    }
}

// $train = new Train();
$vehicle = new Car(new Train(), new Bike());
$vehicle->accelerate();


