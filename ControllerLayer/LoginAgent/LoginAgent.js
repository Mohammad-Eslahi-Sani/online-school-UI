function LoginAgent(inputList){
	this.loginList = inputList;
}

LoginAgent.prototype.requestLogin = function(){
	var requestAry = this.loginList;
    var cookieOption = {
        path: '/',
        expires:1
    };
    if(!!this.loginList[1][1]){
        $.cookie('username',this.loginList[1][1],cookieOption);
    }
    $.removeCookie('sessionId',{path:'/'});

    var serverInterfaceObj = new ServerInterface();
    serverInterfaceObj.doRequest(requestAry,this.getSuccessResponse,this.getErrorResponse);
	console.log('request for login has been sent');
};

LoginAgent.prototype.getSuccessResponse = function(response){
	console.log('success response for login request');
	console.log(response['sessionId']);
	console.log(response['role']);
	//console.log(JSON.parse(response));


    var tempUserType = 'teacher';
    var tempToken = '';
    var cookieOption = {
        path: '/',
        expires:1
    };
    if(!!response['userType']){
        tempUserType = response['userType'];
    }

    if(!!response['sessionId']){
        tempToken = response['sessionId'];
    }
    $.cookie('userType',tempUserType,cookieOption);
    $.cookie('sessionId',tempToken,cookieOption);

    console.log($.cookie());
	var redirector = new RedirectManager();
	if(tempUserType=='student'){
        redirector.redirectTo('studentMainPage');
    }
    else{
        redirector.redirectTo('teacherMainPage');
    }
};

LoginAgent.prototype.getErrorResponse = function(response) {
    alert('Unable to login!');


    console.log('response unparsed for login request');
    console.log(response);
    console.log(response['sessionId']);

    //console.log('pashmoddin222!');
    //var parsed = JSON.parse(response);
    //console.log('pashmoddin3333!');
    //
    //console.log('response parsed for login request');
    //console.log(parsed);
    //console.log('pashmoddin444!');


};