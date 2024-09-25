// Headstart to programming

why we need programming languages?
  computers understand very low level prgramming languages(binary)

Human(high level languages like english)---------->programms(through compiler)------------>Computer(low level language like binary)

Javascript was first invented by Brendan Eichin 1995
Javascript is a single threaded, synchronous,high level programming language

Usually JS is used to create Desktop app-Electron
                             Mobile app-React native

#Variables
  var - Function scoped 
{
  var x=5;
}
console.log(x);
-->5
  let - block scoped 
{
  let x=5;
}
console.log(x);
-->Error as calling outside the block
  const - block scoped(cannot reassign the values)
{
  const x=5;
  x=7;
}
console.log(x);
-->Error as we have already declare x=5 using const and again we are changing the value of x which is not possible in const variable
  while as it is possible in let variable (but ofcourse in a block scoped) and in var variable(wherever in a function):


Data types-
number - Integers
string - Textual data
Boolean - true or false
null - absence of any object value(value was defined but there was nothing there)
undefined - value is never defined
BigInt
Symbol


#Object
  special data type which contains key-values pairs.
  ex-
  let a={
    num: 10,
    str: "avengers"
    isOpen: false
  
  }
console.log(a)
{num:10 , str:avengers, isOpen:false}

#array
  special type of object that contains a list of values ; it can contain values of all data types.
  list of data
ex-
  var y=["name"; 5; {age:15}; true]
console.log(type of y);
-->object


#operators

  Increment/decrement -> a++ , --a
  unary -> + , !
  arithematic -> +,-,/,*
  relational -> >,<,>=,<=
  equality -> ==,!=,===,!==
  assignnment -> +=,-=,/=,*=

#Type_coercion
  automatic or implict conversion of values from one data type to another 
ex-
  let num1=20
  let num2="10"
  let num3="avengers"

console.log(num1+num2):
---->2010
console.log(num1+num3):
---->20avengers
console.log(num1-num2):
---->10
(what has happened here is we have given the num2 value as a string but we are saying here to substract num1-num2 so, javascript converts num2 data type as a integer and substract it from num1
  while as case of first programm we are saying it to num1+num2 as num1's data type is integer and num'2 data tyoe is string so a sa result it is concatenating both of them which is 2010)


// Basic Constructs : Conditional statements and iterative statements
1. if/else statement
2.nested if/else
3.switch statement
4.ternary operators

