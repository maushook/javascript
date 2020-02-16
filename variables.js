/*

Definitions of Hoisting, Variable, Let, Const. 
Hoisting is the concept in JavaScript, which means variables and functions names can be used even before declaring it. 

Variables in Javascript are used to store data and change it anytime. Variables are fundamental aspects of programming. It can be used more. You can even use variables to declare objects fiction and arrays. You can use any words to declare variables except some reserved keywords and its case sensitive. 

Let is the keyword somewhat like variables, but unlike variables, Let can't be used outside the scope and its best practice to use Let inside functions.

Const is also similar to Let; it only can be used inside the scope. Unlike Variables and Let the declared value on Const can't be reassigned. You can change it, but it can't be reassigned like variables and let.

*/


//Example of Hoisting
a=10;
b=15;

//Example for Var
var FirstName= "Jane";
var SecondName= "Patrick";

console.log(FirstName+" "+SecondName);

//Example for Let

function Name(){

	let SecondName="Welson";
	console.log(FirstName+" "+SecondName);
}

Name();
console.log(FirstName+" "+SecondName);


function AgeNum(){
	const age=26;
	console.log(FirstName+" "+SecondName+" Age: "+age);

}
AgeNum();

//Example of Hoisting

var a;
var b;

console.log(a+b);