var myRide = {
	gear : 1,
	locked : true,

	methodSyntax : function (parametersHereIfAny){
		//block of code
		var something = 1;
		return something;
	},

	maxSpeed : function (){
		return this.gear * 15;
	},

	//YOUR CODE HERE
	
howFast: function(){
	console.log(" I am on gear ", myRide.gear, " and I can go ", myRide.maxSpeed());
}, 

shiftUp : function(){
	myRide.gear++;
	console.log("Gear now at ", myRide.gear);
}, 

shiftDown : function(){
	myRide.gear--;
	console.log("Gear now at ", myRide.gear);
}, 

carRemote : function(){
	if (myRide.locked === true){
		console.log("Car is unlocked");
		myRide.locked = false;
	}
	else if (myRidelocked === false){
		console.log("Car is locked");
		myRide.locked = true;
	}
},


	//YOUR CODE ENDS HERE

}
myRide.howFast();
myRide.shiftUp();
myRide.carRemote();