// Recursion

function sumToWithCycle(n) {
    let result = 0;

    for (let i = 0; i < n; i++) {
       result += i;   
    } 

    alert( result );
}

function sumToWithRecursion(n) {
    let result = 0;
    
    if (n === 1) {
        return n; 
    } else {
        return n + sumToWithRecursion(n - 1);
    }

}

function sumToWithProgression(n) {
    return n * (n + 1) / 2;
  }
  

// sumToWithCycle(4);
// sumToWithRecursion(4);
// sumToWithProgression(4);

function getFactorial(n) {
    if (n === 1) {
        return n; 
    } else {
        return n * getFactorial(n - 1);
    }
}

// getFactorial(4);

function fib(n) {
    if(n === 1){
        return n;
    } else if (n === 2){
        return 1;
    } else {
        return fib(n - 1) + fib(n-2);
    }
}

// fib(10);


// Closures

function sum(a){
    return function(b) {
        return a + b;
    }
}

// sum(1)(2);

function inBetween(a, b) { 
   return function(el) {
        if (a < el && el < b) {
          return el;  
        }
    }
} 

function inArray(arr) { 
        return function(el) {
            if (arr.includes(el)) {
              return el;  
            }
 } 
}

// [1, 2, 3, 4, 5, 6, 7].filter(inBetween(3,6));
// [1, 2, 10].filter(inArray([1,2,3]));

function byField(fieldName) {
    return (a, b) => a[field] > b[field] ? 1 : -1;     
}

// [
//     { name: "John", age: 20, surname: "Johnson" },
//     { name: "Pete", age: 18, surname: "Peterson" },
//     { name: "Ann", age: 19, surname: "Hathaway" }
// ].sort(byField('name')); 

//setInterval setTimeout

function printNumbers(from, to){
   let tick = setInterval(function() {
        alert(from);
        if(from === to) {
            clearInterval(tick);
        }
        from++;      
    }, 1000);
}

// printNumbers(1, 10);

//Prototypes

let head = {
    glasses: 1
};
  
let table = {
  pen: 3,
  __proto__: head
};

let bed = {
  sheet: 1,
  pillow: 2,
  __proto__: table
};

let pockets = {
  money: 2000,
  __proto__: bed
};


// alert( pockets.glasses );

function f() {
  alert("Hello!");
}

Function.prototype.defer = function(time) {
    setTimeout(this, time)
};

// f.defer(1000);

function f(a, b) {
    alert( a + b );
  }
  
Function.prototype.defer = function(time) {
    let context = this;
    return function (...args) {
        setTimeout(() => context.apply(this, args), time);
    }   
}


// f.defer(1000)(1, 2);