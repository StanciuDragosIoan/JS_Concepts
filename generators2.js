
/*
    generator function (defined with function*)
    it will stop the execution upon encountering the yield keyword 
*/
function* simpleGenerator() {
    yield 1
    yield 2
    yield 3
  }


//instantiate generator obj by calling generator function
const generatorObject = simpleGenerator();


//call the next() method to yield the values from the generator

/*
    console.log(generatorObject.next()); 
    console.log(generatorObject.next());
    console.log(generatorObject.next());
    console.log(generatorObject.next());
*/



function* SecondSimpleGenerator() {
    console.log('Before 1')
    yield 1
    console.log('Before 2')
    yield 2
    console.log('End of Generator')
  }
  
/*
const SecondGeneratorObject = SecondSimpleGenerator()
console.log(SecondGeneratorObject.next().value) //note this stops execution at 1st yield call
console.log(SecondGeneratorObject.next().value)
*/

//useCases


//generating IDs

function* generateId() {
    let id = 1
  
    while (true) {
      yield id
      id++
    }
  }
  
  const gen = generateId()
  console.log(gen.next().value)
  // 1
  console.log(gen.next().value)
  // 2
  console.log(gen.next().value)
 /*
    This generator is essentially an infinite loop that increments an id variable 
    by one every time it is called and will yield the new id
*/


/*
    note we can also pass values into the generator (for the next yield statement) we 
    can do so via the next() call

    */

    function* incrementIdGenerator() {
        let id = 1

        while (true) {
            const increment = yield id
            if (increment != null) {
            id = id + increment
            } else {
            id++
            } 
        }
    }

    const gen2 = incrementIdGenerator();

    /*
    console.log(gen2.next());
    console.log(gen2.next(3));
    console.log(gen2.next());
    */

    /*
        If you ever want to end a generator without actually going through all possible values 
        you can use the return function on the generator object.
    */

   function* generateId2() {
    let id = 1
  
    while (true) {
      yield id
      id++
    }
  }
  
  const gen3 = generateId2()
  console.log(gen3.next())
  // { value: 1, done: false }
  console.log(gen3.return(10))  //note that return() 'returns' its argument
  // { value: 10, done: true }
  console.log(gen3.next())
  console.log(gen3.next())
  // { value: undefined, done: true }
