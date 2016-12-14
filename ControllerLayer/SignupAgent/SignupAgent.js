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
	//if(!!requestAry.length){
	//	requestAry = [['task','signup'],["username",'ali'],["password",'123'],["role",'teacher']];
	//}
	$.removeCookie('sessionId',{path:'/'});

	var serverInterfaceObj = new ServerInterface();
    serverInterfaceObj.doRequest(requestAry,this.getSuccessResponse,this.getErrorResponse);
	console.log('request for signup has been sent');

};

SignupAgent.prototype.getSuccessResponse = function(response){
    console.log('response from signup request sent to server:');
    console.log(response);
	console.log('do we still have our request array?');
	console.log(response);

    //var parametersList = [['username',this.requestAry['username']],['userType',this.requestAry['userType']]];
    var parametersList = [['username',response['username']]];

	$.cookie('userType',response['role'],{expires:1,path:'/'});
	var redirectAgent = new RedirectManager();
    redirectAgent.setParametersList(parametersList);
    redirectAgent.redirectTo('signupSuccessful');

};

SignupAgent.prototype.getErrorResponse = function(response){
    alert('error in signup Request :');
    alert(response);

};

