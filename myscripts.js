var nav = document.getElementById("topNav");
var main = document.getElementById("main");
var menu = document.getElementsByClassName("menuitems");
var close = document.getElementById("closebtn");

//default to measure if/else from
nav.style.height = "50px";
main.style.marginTop = "50px";
for (i = 0; i < menu.length; i++){menu[i].style.marginTop="100px";};

close.addEventListener("click", function(){
  var menuIcon = close.children;
  for (i = 0; i < menuIcon.length; i++){
  menuIcon[i].classList.toggle("active");
  }   
});

function navToggle() {	
	//to close
	if (nav.style.height <= "275px") {
	nav.style.height = "50px";
	main.style.marginTop = "50px";
	
    	var i = 0;
    	for (i = 0; i < menu.length; i++){
	menu[i].style.opacity="0.0";    
	menu[i].style.marginTop="100px";
	};
    	document.body.style.backgroundColor = "rgba(0,0,0,0.0)";
	
	} 
	//to open
	else if (nav.style.height <= "50px") {
	nav.style.height = "275px";
	main.style.marginTop = "275px";
    	var i = 0;
    	for (i = 0; i < menu.length; i++){
	menu[i].style.opacity="1.0";
	menu[i].style.marginTop="0px";
	};
    	document.body.style.backgroundColor = "rgba(0,0,0,0.4)";
	
	}

};

function myFunction(event, dropDownName) {
    //Pass in your dropdownName which is the dropdown  
    var dropDownHandler = document.getElementById("#topNav");
  
    dropDownHandler.classList.toggle("1.0");
    // Get the trigger element of the dropdown
    var menuHandler = event.currentTarget;
  
    if (dropDownHandler.classList.contains("1.0")) {
      //Attach only when the dropdown is active,
      //to ensure onclick isn't called always
      document.addEventListener("click", function(docEvent) {
        documentHandler(docEvent, menuHandler)
      });
    } else {
      dropDownHandler.classList.toggle("1.0");
      // If is closed, remove the handler
      document.removeEventListener("click", documentHandler);
    }
  
    function documentHandler(event, menuHandler) {
      if (menuHandler.contains(event.target)) {
        dropDownHandler.classList.add("1.0");
      } else {
        dropDownHandler.classList.remove("1.0");
      }
    }
  }