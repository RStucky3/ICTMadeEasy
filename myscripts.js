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

function validateName() {
	var name = document.getElementById('name').value;
	if(name.length == 0) {
	  return false;

	}
	//if (!name.match(/^[a-zA-Z]{3,}(?: [a-zA-Z]+){0,2}$/)) {
	 // alert("Please enter your correct name") ;//Validation Message
	 // return false;
//	}
	return true;
  }

  function validateSurname() {
	var surname = document.getElementById('surname').value;
	if(surname.length == 0) {
	  return false;
	}
   	return true;
 }

 function validateEmail () {

  var email = document.getElementById('email').value;
  if(email.length == 0) {
	return false;

  }
  return true;

}

function validateNeed() {
	var need = document.getElementById('need').value;
	if(need.length == 0) {
	  return false;
	}

   	return true;
 }

 function validateMessage() {
	var message = document.getElementById('message').value;
	if(message.length == 0) {
	  return false;
	}
	
   	return true;
 }


function validateForm() {
  if (!validateName() || !validateSurname() || !validateEmail() || !validateNeed() || !validateMessage()) {

	//document.querySelector(".alert-error").style.display = "block";
	//setTimeout(deleteError, 1000)
  }
  else {
	document.querySelector(".alert-success").style.display = "block";
	setTimeout(deleteForm, 3000)
  }
}

function deleteError(){
	document.querySelector(".alert-error").style.display = "none";
}

function deleteForm(){
	document.getElementById("myForm").reset();
	document.querySelector(".alert-success").style.display = "none";
}

          
