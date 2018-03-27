/*
Author: BAL KRISHN SINGH
Created: 28th March 2018
exection steps: (1) open command prompt (2) goto directory where file "Que1Superhero.js" exists (3)run the code "node Que1Superhero.js"

*/


let inputString= '0 228626'; // input string to call super heros 

var numberMap={2:['a','b','c'],3:['d','e','f'],4:['g','h','i'],5:['j','k','l'],6:['m','n','o'],7:['p','q','r','s'],8:['t','u','v'],9:['w','x','y','z']};

var superHeros=['SUPERMAN', 'THOR', 'ROBIN','IRONMAN','GHOSTRIDER','CAPTONAMERICA','FLASH','WOLVERINE','BATMAN','HULK','BLADE','PHANTOM','SPIDERMAN','BLACKWIDOW','HELLBOY','PUNISHER'];
var superHeroNumbers=[];

//...........convert super hero name strings in superHeros Array in numbers and store in superHeroNumbers Array
for(i=0;i<superHeros.length;i++){
	var heroName=superHeros[i];
	var heroNameNumberString='';
	for(j=0;j<superHeros[i].length;j++){
		for(k=0;k<Object.keys(numberMap).length;k++){
			if(numberMap[Object.keys(numberMap)[k]].includes(heroName[j].toLowerCase())){
				heroNameNumberString+=Object.keys(numberMap)[k];
			}
		}
	}
	superHeroNumbers[i]=heroNameNumberString;
}


if(!inputString || inputString.length <4 ||inputString[0]!== '0' || inputString[1]!==' '){
	console.log("please enter valid input.");
}else{
	
var requiredInputString=inputString.slice(2, inputString.length); //eliminating first 2 characters 0 and space

var requiredIndex=superHeroNumbers.indexOf(requiredInputString); // finding the index in superHeroNumbers Array

if(requiredIndex!==-1){
	console.log("The Super Hero is "+ superHeros[requiredIndex]);
}else{
	console.log("The Super Hero donot match");
}

}