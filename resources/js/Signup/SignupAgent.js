function SignupAgent(username,password,passwordAgain,userType){
	this.username = username;
	this.password = password;
	this.passwordAgain = passwordAgain;
	this.userType = userType;
	this.requestAry = [];
}

SignupAgent.prototype.checkPassword = function(password,passwordAgain){
	return(password==passwordAgain);
}

SignupAgent.prototype.checkUsername = function(username){
	return true;
}

SignupAgent.prototype.checkUserType = function(userType){
	return(userType =='Teacher' || userType == 'Student');
}

SignupAgent.prototype.checkFields = function(username,password,passwordAgain,userType){
	if(!checkPassword(password,passwordAgain)){
		alert('passwords do not match');
	}
	else if(!checkUsername(username)){
		alert('problem with username');
	}
	else if(!checkUserType(userType)){
		alert('problem with userType');
	}
}

SignupAgent.prototype.setRequestAry = function(inputAry){
	this.requestAry = inputAry;
}

SignupAgent.prototype.requestSignup = function(username,password,userType){
	// var requestAry = [['task','signup'],['username',username],['password',password],['userType',userType]];
	var requestAry = this.requestAry;
	if(!!requestAry.length){
		var requestAry = [['task','signup'],["username",username],["password",password],["role",userType]];
	}
	var interfaceObj = new UiLogicInterface();
	interfaceObj.doRequest(requestAry,this.getSignupResponse);
	alert('request for signup has been sent');

}

SignupAgent.prototype.getSignupResponse = function(response){
	alert('response from signup:');
	alert(response);
}