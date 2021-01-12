//generator functions
function* generatorExample(){
    //extract values from generator functions
    console.log('test');
    yield 8;
    yield 9;
    yield 10;

    return 11;
}


//this returns a generator object (it does not actually 
//yield anything so lines 3-7 do NOT execute yet)
// const generator = generatorExample();

// //in order to yield the values we must call the next() method
// console.log(generator.next()); //8 done:false
// console.log(generator.next()); //9 done:false
// console.log(generator.next()); //10 done:false
// console.log(generator.next()); //nothing done:true 

// console.log(generator);

//between calls the execution of the generator function is 'suspended'


//loop through generator (generator is a type of iterator)

// for (const n of generatorExample()){
//     console.log(n);
// }


//square number generator
function* createSquareNumbersGenerator(max){
    let n = 0;

    while(n < max){
        n++;
        yield n*n;
    }
}

// const squaredNumbers = createSquareNumbersGenerator();

// console.log(squaredNumbers.next().value);
// console.log(squaredNumbers.next().value);
// console.log(squaredNumbers.next().value);

for(const n of createSquareNumbersGenerator(10)){
    console.log(n);
}


function *createUniqueRandomGenerator(arr){
    const available = arr;

    while(available.length != 0){
        const randomIndex = Math.floor(Math.random() * available.length);
        const value = available[randomIndex];

        //remove used value from avail
        available.splice(randomIndex, 1);

        yield value;
    }
}

const names = ["Dom", "Shelly", "Timmy", "Marie"];

const uniqueNames  = createUniqueRandomGenerator(names);

for (const name of uniqueNames){
    console.log(name);
}
