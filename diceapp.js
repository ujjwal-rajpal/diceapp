function Diceroll(){
this.rollOutput = function(){
let sum=0;
	for(let i=0; i<5; i++){
  	sum=sum+arguments[i]
  }
  return sum
}
}

let input= new Diceroll()
console.log(input.rollOutput(1,6,2,5,7))