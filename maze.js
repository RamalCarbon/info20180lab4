//Initializing variables globally

var start;
var end;
var boundaries;
var maze;
var mInitiate = false;
var mStop = false;
var wTouch = true;
var boundaries=true;

window.onload = function(){
	//Linking the variables to html classes
	boundaries = document.querySelectorAll("div#maze div.boundary");
	maze = document.getElementById("maze");
	start = document.getElementById("start");
	end   = document.getElementById("end");

	//Change wall to red when the mouse touches it
	for (i=0;i<boundaries.length;i++){
		boundaries[i].addEventListener("mouseover", function(element){
			
		document.getElementById("status").innerHTML = "You Lose: Avoid the Walls";

			for (i=0;i<boundaries.length;i++){
				boundaries[i].classList.add("youlose")
			}
			alert(":O");
			wTouch = false;
		});
	}; 


	 //To initiate the game
	start.addEventListener("mouseover", function(){
		mInitiate = true;
	});
	
	//To start the game over
	start.addEventListener("click", function(){
		location.reload();
	})
	
	//This happens when you leave the maze 
	maze.onmouseleave = function(){
		if (mInitiate === true){
			document.getElementById("status").innerHTML = "Try again: Stay within the Maze";
			alert(":[");
		}
	}

	//This happens when you win
	end.addEventListener("mouseover", function(){
		mStop = true;

		if (mInitiate && wTouch){
			document.getElementById("status").innerHTML = "Victory";
			alert(":D")
		} 
	});
	
}
