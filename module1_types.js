
//Objects

function createObject(){
    let user = {};
    user.name = "John";
    user.surname = "Smith";
    user.name = "Pete";
    delete user.name;
    console.log( user );

}

// createObject();

function isEmpty(){
    let schedule = {};
    schedule["8:30"] = "get up";
    for (let key in schedule) {
        return false;
    }
    return true;
}

// isEmpty();

function sumSalary(){
    let sum = 0;
    let salaries = {
        John: 100,
        Ann: 160,
        Pete: 130
      }
    
    for (let key in salaries) {
        sum+=salaries[key];
    }
    alert(sum);

}

// sumSalary();

function multiplyNumeric(){
  let menu = {
     width: 200,
     height: 300,
     title: "My menu"
   };

  for (let key in menu) {
    if(typeof menu[key] === "number"){
        menu[key] *= 2;
    }
  }
  console.log( menu );
}

// multiplyNumeric();

function calculator(){
    let obj = {
        a: 0,
        b: 0,
        sum(){
            return this.a + this.b;
        },
        mul(){
            return this.a * this.b;
        },
        read(){
            this.a = +prompt('Input a:', '');
            this.b = +prompt('Input b:', '');
        }
    }
    obj.read();
    alert( obj.sum() );
    alert( obj.mul() );
}

// calculator();


function Calculator(){

    this.read = function(){
        this.a = +prompt('Input a:', '');
        this.b = +prompt('Input b:', '');
    },
    this.sum = function(){
        return this.a + this.b;
    },
    this.mul = function(){
        return this.a * this.b;
    }

}

// new Calculator().read();

function Accumulator(startingValue){

    this.value = startingValue,
    this.read = function(){
        return this.value += +prompt('Add to value: ', 0)
    }

}

// new Accumulator(1).read();



//Primitives
// string, number, bigint, boolean, null, undefined, symbols

// Numbers

function sum() {
    let a = +prompt("Input first number", "");
    let b = +prompt("Input second number", "");
    return a + b;
}

// sum();

function readNumber(){
    let number;

    while(!isFinite(number) ){
        number = prompt("Enter a number:", ""); 
        if (number === null || number === '') break;
    } 
    alert("Your number is: " + +number);
    
}

// readNumber();

function random(min, max) {
    return min + Math.random() * (max - min);
}

// random(1, 5);

//Strings

function ucFirst(str){
    return str.slice(0,1).toUpperCase();
}

// ucFirst("Вася");

function checkSpam(str){
    return str.toLowerCase().includes("viagra") || str.toLowerCase().includes("xxx");
}

// checkSpam('free xxxxx');

function truncate(str, maxlength){
    if (str.length > maxlength) {
       return str.slice(0, maxlength - 1) + "..."; 
    } else {
       return str; 
    }
}

// truncate("Вот, что мне хотелось бы сказать на эту тему:", 20);

function extractCurrencyValue(str) {
    return +str.slice(1);
}

// extractCurrencyValue("$100");

//Arrays

function shuffleArray() {
    let styles  = ["Джаз", "Блюз"];
    styles.push("Рок-н-ролл");
    const middle = Math.ceil(styles.length / 2) - 1;
    styles[middle] = "Классика";
    alert(styles.shift());
    styles.unshift("Рэп", "Регги");
}

// shuffleArray();

function sumInput() {
  let arr = []; 
  do{
    let dialog = prompt("Input number: ", "") 
    if (dialog === "" || dialog === null) break;
    arr.push(+dialog); 
  }
  while(true)
  return arr.reduce((a,b)=>a+b);

}

// sumInput();

function camelize(str) {
    let arr = str.split('-');
    let modified_arr = arr.map((el,arr) => el.slice(0,1).toUpperCase() + el.slice(1, arr.length))
    console.log(modified_arr.join(''));
    return modified_arr.join('');
}

// camelize("background-color");

function filterRange(arr, a, b) {
    return arr.filter(el => a <= el && el <= b);
}

// filterRange([5, 3, 8, 1], 1, 4);

function filterRangeInPlace(arr, a, b) {
    arr.forEach((el, i, arr) => {
        if (el < a || el > b) {
            arr.splice(i, 1);
            i--;
          } 
    });
    console.log(arr);
}

// filterRangeInPlace([5, 3, 8, 1], 1, 4);

function sortToMin(arr) {
    return arr.sort((a, b) => {
        if (a < b) {
            return 1;
        } else if (a === b){
            return 0;
        } else {
            return - 1;
        }
    })

}

// sort([5, 2, 1, -10, 8]);

function copySorted(arr) {
    let sorted = [];
    sorted = sorted.concat(arr).sort()
    alert(sorted);
    alert( arr );
}

// copySorted(["HTML", "JavaScript", "CSS"]);

function getFromObjects(){
    let vasya = { name: "Вася", age: 25 };
    let petya = { name: "Петя", age: 30 };
    let masha = { name: "Маша", age: 28 };
    
    let users = [ vasya, petya, masha ];
    let names = users.map(el => el.name)
    alert(names);
}

// getFromObjects();

function transformObjects(){
    let vasya = { name: "Вася", surname: "Пупкин", id: 1 };
    let petya = { name: "Петя", surname: "Иванов", id: 2 };
    let masha = { name: "Маша", surname: "Петрова", id: 3 };

    let users = [ vasya, petya, masha ];
    let usersMapped = users.map(el => ({fullName: el.name + " " + el.surname, id: el.id}))
    alert( usersMapped[0].id );
    alert( usersMapped[0].fullName ); 
}

// transformObjects()

function sortByAge(){
    let vasya = { name: "Вася", age: 25 };
    let petya = { name: "Петя", age: 30 };
    let masha = { name: "Маша", age: 28 };

    let arr = [ vasya, petya, masha ];
    arr = arr.sort((a,b)=> {
        if (a.age > b.age){
            return 1;
        } else {
            return -1;
        }
    });
    console.log( arr );
}

// sortByAge()

function shuffle(array){
    for(let i = 0; i < array.length; i++){
        let j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    console.log( array )
}

// shuffle([1,2,3]);

function getAverageAge(){
    let vasya = { name: "Вася", age: 25 };
    let petya = { name: "Петя", age: 30 };
    let masha = { name: "Маша", age: 29 };
    
    let arr = [ vasya, petya, masha ];
    let average = arr.reduce((accum, el) => accum + el.age, 0)
    alert( average / arr.length );
}

// getAverageAge();

function unique(){
   let result = [];
   let strings = ["кришна", "кришна", "харе", "харе",
   "харе", "харе", "кришна", "кришна", ":-O"
   ];
   strings.forEach(el=> {
       if(!result.includes(el)){
           result.push(el);
       }
   })
   console.log(result);
}

// unique();

//Map & Set

function unique(arr){
    let set = new Set();
    arr.forEach(el => set.add(el));
    console.log(set);

}

// unique(["Hare", "Krishna", "Hare", "Krishna", "Krishna", "Krishna", "Hare", "Hare", ":-O"]);

function aclean(arr){
    let obj = {};

    arr.forEach((el, i) => {
      let sorted = arr.map(el => {el.toLowerCase().split('').sort().join('')})
      obj[sorted] = arr[i];   
    })
    console.log(Object.values(obj));
}

// aclean(["nap", "teachers", "cheaters", "PAN", "ear", "era", "hectares"]);

function sumSalaries(salaries){
    let sum = 0;
    for (let salary of Object.values(salaries)) {
        sum += salary;
    }
    alert (sum);

}

// sumSalaries({"John": 100, "Pete": 300, "Mary": 250});

function count(obj){
    alert (Object.keys(obj).length );
};

// count({"John": 100, "Pete": 300, "Mary": 250});

// Destructuring

function destructuring(){
  let user = {
      name: "John",
      years: 30
    };
  let {name, years, isAdmin = false} = user;
  alert( name );
  alert( years );
  alert( isAdmin );
      
}

// destructuring();

function minSalary(){
  let maxSalary = 0;
  let maxName = null
  let salaries = {
      "John": 100,
      "Pete": 300,
      "Mary": 250
    };
  
  for(const [name, salary] of Object.entries(salaries)) {
      if (max < salary) {
        maxSalary = salary;
        maxName = name;
      }
    }
  alert( maxName );
}

// minSalary();

//Date

function createDate(){
  let date = new Date(2012, 1, 20 , 3, 12);
  alert(date); 

}

// createDate();

function getWeekDay(date){
  let week = ['ВС', 'ПН', 'ВТ', 'СР', 'ЧТ', 'ПТ','СБ'];
  alert(week[date.getDay()]);

}

// getWeekDay(new Date(2012, 0, 3));

function getLocalDay(date){
  date.getDay() === 0 ? alert(7) : alert(date.getDay());

}

// getLocalDay(new Date(2012, 0, 3));

function getDateAgo(date, days){
  let newDate = new Date(date);
  newDate.setDate(date.getDate() - days);
  alert( newDate.getDate() );

}

// getDateAgo(new Date(2015, 0, 2), 1);

function getLastDayOfMonth(year, month){
  let date = new Date(year, month + 1, 0); 
  alert( date.getDate() ); 

}

// getLastDayOfMonth(2012, 1);

function getSecondsToday(){
  let now = new Date();
  let today = new Date(now.getFullYear(), now.getMonth(), now.getDay());
  alert ( Math.round((now - today) / 1000) );

}

// getSecondsToday();

function getSecondsToTomorrow(){
  let now = new Date();
  let tomorrow = new Date(now.getFullYear(), now.getMonth(), now.getDate()+1);
  alert ( Math.round((tomorrow - now) / 1000) );

}

// getSecondsToTomorrow();

//JSON

function toJSONfromJSON() {
 let user = {
     name: "Василий Иванович",
     age: 35
   }; 
 console.log( JSON.parse( JSON.stringify(user) ));
}

// toJSONfromJSON();
