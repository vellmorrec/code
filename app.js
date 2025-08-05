//1.
let firstName = "Ali";
let lastName = "Hassan";
let fullName = firstName + lastName;
alert(fullName); // Output: Ali Hassan

//2.
var a = "5";
var b = 2;
var result = a + b;
console.log(result); // Output: "52"
// a string he or b number he or javascript ne b ko string main convert kr ke dono ko join kr dia 

//3.
var a = 10;
var b = 5;
var c = ++a + b-- + --b;
console.log(c);
 // Output: 19
// c = 11 + 5 + 3 = 19

//4.
var num = "20";
var result = Number(num) * 3;
console.log(result); 
// Output: 60

//5.
var result = 10 / 3;
console.log(result); 
// Output: 1

//6.
var student = "Hassan";
var score = 88;
alert(student + " got " + score + " marks in JavaScript!");
// Output: Hassan got 88 marks in JavaScript!

//7.
var x = 5;
var y = x++ + ++x - --x;
console.log(y);
// y = 5 + 7 - 6 = 6 
// // Output: 6
 
//8. 
// illegal
//  var 1name = "Ali";       
//  var my-name = "Ali";    
//  var  var = 5;             
//  var alert = "Hi";        
//  var user name = "Ali";  

// legal
// var name1 = "Ali";
// var myName = "Ali";
// var value = 5;
// var userAlert = "Hi"; 
// var userName = "Ali";

//9.
var perfumePrice = 2500;
var quantity = 4;
var total = perfumePrice * quantity;
alert("Your bill is " + total + " PKR");
 // your bill is 10000 PKR

//10.
var x = 10;
var result = x * 2 + 5 - 3;
console.log(result);
// result = 10 * 2 = 20 → 20 + 5 = 25 → 25 - 3 = 22
// Output: 22



