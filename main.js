
//Exercise #1
var userNum = 8;
var magicNum = 10;

if (userNum < magicNum) {
	alert("Your number is less than 10");
}else if(userNum > magicNum) {
	alert("The magic number was 10. Your number is greater than 10");
}else {
	alert("You chose the magic number 10");
}


//Exercise #2
function welcome(greeting, userName){
	console.log(greeting, userName);
}
welcome("Hello, you have entered the username:", "Jillian");


//Exercise #3
function blank(){
	console.log("There's nothing here");
}
blank();


//Exercise #4
var song1 = " bottles of root beer on the wall,"
var song2 = " bottles of root beer... take one down, pass it around"
var song3 = " bottles of root beer on the wall"

for(var i = 99; i >= 1; i--){
	console.log(i, song1, i, song2, i-1, song3);
}

