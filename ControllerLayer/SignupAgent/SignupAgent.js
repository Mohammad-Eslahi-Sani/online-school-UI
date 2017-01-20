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
	var requestAry = this.requestAry;
	$.removeCookie('sessionId',{path:'/'});
	$.cookie('username',requestAry[1][1],{path:'/',expires:1});
	$.cookie('role',requestAry[3][1],{path:'/',expires:1});
	var serverInterfaceObj = new ServerInterface();
    serverInterfaceObj.doRequest(requestAry,this.getSuccessResponse,this.getErrorResponse);
	console.log('request for signup has been sent');

};

SignupAgent.prototype.getSuccessResponse = function(response){
    console.log('response of signup request received from server:');
    console.log(response);

    var signupErrorFlag = true;
	if(!!response['username'] && !!response['role']){
        if($.cookie('username') == response['username'] && $.cookie('role')==response['role']){
            signupErrorFlag = false;
            alert(response['username'] + " have successfully been registered as a " + response['role'] );
        }
    }

    if(signupErrorFlag){
        $.removeCookie('username',{path:'/'});
        $.removeCookie('role',{path:'/'});

        alert("Sorry, Error in registering you in server");
    }

};

SignupAgent.prototype.getErrorResponse = function(response){
    alert('Error in sending signup Request to server');
    console.log(response);

};


