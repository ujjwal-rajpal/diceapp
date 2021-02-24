/**
 * constructor function to sum  
 *
 * created by ujjwal
 * created on 13th feb 2020
 *
*/
function Diceroll(){
  this.rollOutput = function(param){
    let sum=0;
    param.forEach(function(item){
   		sum=sum+item;
    })
      return sum;
  }
}
/**
 * purpose : function to roll dice and generate random number between 1 and 6
 *
 * created by ujjwal
 * created on 13th feb 2020
 *
*/
function randomIntFromInterval(min, max) { // min and max included 
  return Math.floor(Math.random() * (max - min + 1) + min);
}
/**
 * function to play game
 * purpose : called when button is clicked
 *
 * created by: Ujjwal
 * created on: 13th feb 2020
*/
function playme(){
//create object of Diceroll function
let input= new Diceroll()
//generate random number 5 times.
let noOfTimes = document.getElementsByName("noOfTimesDiceRolls")[0].value;
//set error if no of time is 0
if(noOfTimes == 0){
	document.getElementById("output").innerHTML = "";
	document.getElementById("error").innerHTML = "No of dice rolled must be greater than 0.";	
	return
}
document.getElementById("error").innerHTML=""
let rollOutput = [];
for(let i=0; i<noOfTimes; i++){
  rollOutput.push(randomIntFromInterval(1,6))
}
//set output 
let output = input.rollOutput(rollOutput)
//set output in div
document.getElementById("output").innerHTML = output;
}
