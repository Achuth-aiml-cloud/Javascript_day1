/* just remove the comments and i hope you may enjoy this file */












//console.log('welcome to the javascript');
//console.log('second line to print in console');
//alert('this is an alert here');
// variables in js
//var a = 'this is variable';
//console.log(a);
//var somenum = 45;
//console.log(somenum);

//document.getElementById('sometext').innerHTML = "Helloworld";

//var age = prompt("what is your age ?");
//document.getElementById('getage').innerHTML = age;

//Numbers in js and its operations
/*var num1 = 5.7;
var num2 = 6.3;
console.log(num1 + num2);
var num3 = num1 + num2;
console.log(num3)
var n1 = 566;
var n2 = 10;
var n3 = n1/n2;
console.log(n3);
//increment and decrement
var num11  = 11;
num11++;
console.log(num11);*/
// reaminder operation in js
/*var num1 = 100;
var num2 = 12;
console.log("the reaminder is " + num1%num2);*/
//increment and decrement by any number
/*var num1 = 20
num1+=20;
console.log(num1);
num1-= 20;
console.log(num1);
num1 *= 20;
console.log(num1);*/
/*functions*/
// functions in javascript
//1 .function creation:
/*
function fun(){
      alert("this is a function");
}
//2.call the function
fun();
*/
// functionns problem 2
/*
function getname(name){
      console.log("hellow " + name);
      document.getElementById('getage').innerHTML = "hellow"+ name;
}
getname('achuth');

function getage(age){
      console.log("hello" + age);
      document.getElementById('getage').innerHTML = "my age is"+ age;
}
getage(25);
*/
/*
function sumofnum(n1 ,n2){
      var num1 = n1;
      var num2 = n2;
      console.log(num1 + num2);
}
sumofnum(10,20);
*/

//while loops and for loops
/*
var num = 0;
while(num < 10){
      num+=1;
      console.log(num);
}
*/
/*
for (let i = 0; i <10; i++) {
      console.log(i);
}
*/


/*

// data types using "let" instead of "var" for declaring the variables here
let age = 10;//number
let name = 'achuth';
let names_are = {first:'achuth' , second:'dintakurthi'};//object and ditionary
let truth = false; //boolean
let isnum = true; //boolean
let groceries = ['apples','coffee','bananas','others']; //arrays
let random; //undefined
let nothing = null; //value is null

//strings and it's javascript
let fruit = 'banana';
let morefruits = 'banana\napple\noranges'
console.log(morefruits); // new line

console.log(fruit.length);
console.log(fruit.indexOf('na'));
//slicling
console.log(fruit.slice(2,5));
//other methods
console.log(fruit.replace('ban','nab'));
console.log(fruit.toUpperCase());
console.log(fruit.toLowerCase(fruit))
//accessing through the index value
console.log(fruit[2]);
//split
console.log(fruit.split(''));
//split function most genearal use case is while reading the csv files it may used by the .split(',')
let some = 'achuth,vera,venkata,naga,durga';
let comma_sep = some.split(',');
console.log(comma_sep);

*/

//Arrays in javascript 
let fruits_array = ['banana','apples','mangors','pineapple'];

let fruits_array1 = new Array('banana','apples','mangors','pineapple')

console.log(fruits_array);
// arrays are mutable
for (let i=0; i< fruits_array.length; i++){
      console.log(fruits_array[i]);
}

//day1 upto arrays declaration