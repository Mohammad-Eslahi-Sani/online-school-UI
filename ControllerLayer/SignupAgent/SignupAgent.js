$.getScript('/ServerInterface/ServerInterface.js');
function SignupAgent(){
	this.requestAry = [];
}

SignupAgent.prototype.checkPassword = function(password,passwordAgain){
	return(password==passwordAgain);
};

SignupAgent.prototype.checkUsername = function(username){
	return true;
};

SignupAgent.prototype.checkUserType = function(userType){
	return(userType =='Teacher' || userType == 'Student');
};

SignupAgent.prototype.checkFields = function(username,password,passwordAgain,userType){
	if(!this.checkPassword(password,passwordAgain)){
		alert('passwords do not match');
	}
	else if(!this.checkUsername(username)){
		alert('problem with username');
	}
	else if(!this.checkUserType(userType)){
		alert('problem with userType');
	}
};

SignupAgent.prototype.setRequestAry = function(inputAry){
	this.requestAry = inputAry;
};

SignupAgent.prototype.requestSignup = function(){
	// var requestAry = [['task','signup'],['username',username],['password',password],['userType',userType]];
	var requestAry = this.requestAry;
	if(!!requestAry.length){
		requestAry = [['task','signup'],["username",'ali'],["password",'123'],["role",'teacher']];
	}
	var serverInterfaceObj = new ServerInterface();
    serverInterfaceObj.doRequest(requestAry,this.getSuccessResponse,this.getErrorResponse);
	console.log('request for signup has been sent');

};

SignupAgent.prototype.getSuccessResponse = function(response){
    console.log('response from signup request sent to server:');
    console.log(response);

};
var Successful;
SignupAgent.prototype.getErrorResponse = function(response){
    console.log('response from signup request sent to server:');
    console.log(response);

};


