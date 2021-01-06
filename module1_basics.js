
// Variables
// let arr

function showMessage(){
    const MESSAGE = "Я JavaScript!";
    alert( MESSAGE );
}

// showMessage();

function showVariables(){
    let admin;
    let name = "Джон";
    admin = name;
    alert( admin );
}

// showVariables();

// Data types
// string, number, bigint, boolean, null, undefined, objects, symbols

// Browser interface functions
// alert, prompt, confirm  

function createAndShowUser(){
    let userName = prompt( "What is your name?", "Mr.Nobody" );
    alert( `You are ${userName}` );
}

// createAndShowUser()

//Types converting
//String(value), Number(value), Boolean(value)
//undefined --> NaN, null --> 0

//Math operations

function correctSum(){
    let a = prompt("Первое число?", 1);
    let b = prompt("Второе число?", 2);
    alert(+a + +b);
}

// correctSum()

//if else
function getOfficialName() {
    let userAnswer = prompt("Какое «официальное» название JavaScript?", "");
    if (userAnswer === "ECMAScript") {
        alert("Правильно!");
    } else {
        alert("Не знаете? “ECMAScript”!");
    }
}

// getOfficialName()

function checkNumber() {
    let userAnswer = prompt("Input number:", "");
    if (userAnswer > 0) {
        alert(1);
    } else if (userAnswer < 0){
        alert(-1);
    } else {
        alert(0);
    }
}

// checkNumber();

//Logical operators

function checkAge() {
    let age = prompt("Input age:", "");
    if (!(age >= 14 && age <=90)) {
        alert("I am outside the range");
    } else {
        alert("I am inside the range");
    }
}

// checkAge();

function checkLogin() {
    let age = prompt("Ваш логин?", "");

    if (age === "" || age === null) {
        alert("Отменено");
    } else if (age === "Админ") {

        let password = prompt("Ваш пароль?", "");

        if (password === "" || age === null) {
            alert("Отменено");
        } else if (password === "Я Главный"){
            alert("Здравствуйте!");
        } else {
            alert("Неверный пароль");
        }

    } else {
        alert ("Я вас не знаю");
    }
}

// checkLogin();

//for while

function getEvenNumbers() {
    for (let i = 2;  i <= 10; i++) {
        if(i % 2 == 0) alert(i);
    }
}

// getEvenNumbers();

function convertForToWhile() {
    let i = 0;
    while (i < 3) {
        i++;
        alert( `number ${i}!` );
       
    }
}

// convertForToWhile();

function inputNumberMoreThan100() {
    let number = prompt("Input number, more than 100:", "");
    while (number < 100 && number) {
        number = prompt("Input number, more than 100:", "");
    }
}

// inputNumberMoreThan100();

function getPrimeNumbers() {
    let end = prompt("Input end of the range: ","");
    prime:
    for (let i = 2; i <= end; i++) {
       for (let j = 2; j < i; j++) {
           if (i%j == 0) continue prime;
           
       }
      alert(i); 
    }
}

// getPrimeNumbers();

//switch

function convertSwitchToIf(params) {
    let browser = prompt("Input browser name", "");
    if (browser === "Edge") {
        alert("You've got the Edge!");
    } else if( browser === "Chrome" || browser === "Firefox" ||  browser ==="Safari" || browser === "Opera"){
        alert("Okay we support these browsers too");
    } else {
        alert( "We hope that this page looks ok!" );
    }
}

// convertSwitchToIf();

function convertIftoSwitch() {
    const number = +prompt('Введите число между 0 и 3', '');
    switch(number){
        case 0:
          alert('Вы ввели число 0');
          break;

        case 1:
          alert('Вы ввели число 1');
          break;

        case 2:
        case 3:
          alert('Вы ввели число 2, а может и 3');
          break;
    }
}

// convertIftoSwitch();

// functions

function checkAge(age) {
    return (age > 18) ? true : confirm('Родители разрешили?');
  }

// checkAge();

function min(a, b) {
    return (a < b) ? a : b;
}

// min(2,5)

function pow(x, n) {
    let result = x;
    for (let i = 1 ;  i < n; i++) {
        result *= x;
    }
    return result;
}

function countPow(){
    let x = prompt("Input x:", '');
    let n = prompt("input n:", '');

    (n < 1) ? alert(`${n} is invalid`) :  alert(pow(x, n));
}

// countPow();

//arrow functions

function ask(question, yes, no){
    if (confirm(question)) yes()
    else no();
  };

//   ask(
//     "Вы согласны?",
//     () => alert("Вы согласились."),
//     () => alert("Вы отменили выполнение.")
//   );
