var Mortal;
var Men = Mortal;
var Socrates = Men;

if (Men === Mortal){
	console.log("All the Men are Mortal")
} if (Socrates===Men){
	console.log("Socrates is the Man")
	console.log("Therefore, Socrates is Mortal");
} else{
	console.log("Socrates is Immortal");
}
var cake;
var chocolate;
var vanilla;
cake = vanilla;
vanila=true;
chocolate=false;

if(cake === vanilla || chocolate ){
	console.log("This cake is either vanilla or chocolate.");
}

if(!chocolate ){
	console.log("This Cake is Not chocolate.");
}

if(cake === vanilla) {
  console.log("Therefore, this cake is vanilla.");
}