//CLOSURES JS (watch next factories -> compositions vs inheritance)



//functions have access to variables outside of their scope:

var me = "Bruce Wayne";
function greetMe() {
    console.log("Hello " + me);
}
//greetMe(); //logs 'Hello Bruce Wayne' despite the fact that the variable 'me' is outside the function scope;

//if I re-assign me 
me = "Batman";
//greetMe(); //logs batman (so it reads the me variable that is outside of its scope all the time)




//CLOSURE EXAMPLE USE CASE
// function sendrequest() {
//     var requestID = '123';
//     $.ajax({
//         url: '/myUrl',
//         success: function (response) {
//             alert('Request ' + requestID + ' Returned');
//         }
//     });
// }





//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Closures

//MOZILLA DOCS EXEMPLES


//1 ->   LEXICAL SCOPING ()


function init() {
    var name = 'Mozilla'; // name is a local variable created by init
    function displayName() { // displayName() is the inner function, a closure
        console.log(name); // use variable declared in the parent function
    }
    displayName();
}
//init();


//in the example above note how the displayName() function has access to the scope of its parent function init();
//also note that if we move the 'name' variable outside of the init() function, the displayName() function would still have access to it;


//2 -> CLOSURE
function makeFunc() {
    var name = 'Mozilla';
    function displayName() {
        console.log(name);
    }
    return displayName; //note we are returning the displayName function before executing it (this is called a CLOSURE)
}

var myFunc = makeFunc();
myFunc();




//A closure is the combination of a function and the lexical environment within which that function was declared. 
// This environment consists of any local variables that were in-scope at the time the closure was created.
//In this case, myFunc is a reference to the instance of the function displayName created when makeFunc is run. 
//The instance of displayName maintains a reference to its lexical environment, within which the variable name exists. For this reason, when myFunc is invoked, the variable name remains available for use and "Mozilla" is passed to alert.





