// EASY

function isPrime(num) {
    for (let i = 2; i < num; i++) {
        if (num % i === 0) {
            return false
        }
    }
    return true;     
}

// alert( isPrime(17) );

function factorial(num) {
    if (num === 1){
        return 1
    } else {
        return num * factorial( num - 1 );
    }
}

// alert( factorial(6));

function fib(num) {
    let a = 1;
    let b = 1;
    for(let i = 3; i <= num; i++) {
       let c = a + b;
       a = b;
       b = c;  
    }
    return b;

}

// alert ( fib(10) );

function isSorted(arr) {
    let base = [].concat(arr);
    let sorted = arr.sort((a,b)=> a-b);

    return base.every((el, i) => el === sorted[i]);

}

// alert ( isSorted([3, 9, -3, 10]));

function filter(arr, f) {
   let result = [];

   for (let i = 0; i < arr.length; i++) {
       if(f(arr[i])){
           result.push(arr[i]);
       }  
   } 
   return result;   
}

// alert( filter([1, 2, 3, 4], n => n < 3) );

function reduce(arr, f, base) {
    for (let i = 0; i + 1 < arr.length; i+=2) {
        base += f(arr[i], arr[i+1]);
    } 

    return base;   
 }

//  alert( reduce([1, 2, 3, 4], (a, b) => a + b, 0) );

function reverse(str) {
    let result = '';
    for(let i = str.length - 1; i >= 0; i--){
        result += str[i];
    }
    return result;
}

// alert( reverse('abcdef') );

function indexOf(arr, index) {
    for (let i = 0; i < arr.length; i++) {
        if (index === arr[i]) {
            return i;
        } else {
            return '-1';
        }  
    }
    
}

// alert( indexOf([1, 2, 3], 4) )

function isPalindrome(str) {
    str = str.toLowerCase().split(' ').join('');
    let reverse = str.split('').reverse().join('');
    return reverse === str;

}

// alert ( isPalindrome('A man a plan a canal Panama') );

function missing(arr) {
    function arithSum(num) {
        return (num * num + num) / 2;
    }
    if (arr.length === 0) {
        return undefined;
    } else {
        let arrSum = arithSum(arr.length);
        let currentSum = 0;
        for(let i = 0; i < arr.length; i++ ){
            currentSum += arr[i];
        }
        if (arrSum !== currentSum) {
            return arithSum(arr.length + 1) - currentSum;
        } else {
            return undefined;
        }


    }
}

// alert( missing([5, 1, 4, 2]) );

function isBalanced(str){
    const map = {
        '(': ')',
        '[': ']',
        '{': '}',
    };
    const closing = Object.values(map);
    const stack = [];
    for (let char of str) {
        if (map[char]) {
            stack.push(char);
        } else if (closing.includes(char) && char !== map[stack.pop()]) {
            return false;
        }
    }
    return !stack.length;
}

// alert( isBalanced('foo { bar { baz }') );

// MEDIUM

function uniq(arr) {
   return arr.filter((el, i, arr) => arr.indexOf(el) === i);
}

// alert( uniq( [1, 4, 2, 2, 3, 4, 8] ) );

function intersection(arr1, arr2) {
    let similar = [];

    arr1 = arr1.sort((a, b) => a - b);
    arr2 = arr2.sort((a, b) => a - b);

    arr1.forEach((el, i) => { 
        if(arr2.includes(el)){
            similar.push(el);
        }
    });

    return similar.reverse();

}


// alert ( intersection([1, 5, 4, 2], [8, 91, 4, 1, 3]) )   

function includes(arr, el) {
    return arr.includes(el);
}

// alert( includes([1, 3, 8, 10], 8));
