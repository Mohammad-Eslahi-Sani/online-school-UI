$.getScript('/ServerInterface/ServerInterface.js');
function LoginAgent(inputList){
	this.loginList = inputList;
}

LoginAgent.prototype.requestLogin = function(){
	var requestAry = this.loginList;
	var serverInterfaceObj = new ServerInterface();
    serverInterfaceObj.doRequest(requestAry,this.getSuccessResponse,this.getErrorResponse);
	console.log('request for login has been sent');
};

LoginAgent.prototype.getSuccessResponse = function(response){
	alert('response for login request');
	alert(response);
	var redirector = new RedirectManager();
	redirector.setParametersList([['username','اصلاحی']]);
	redirector.redirectTo('teacherMainPage');
};

LoginAgent.prototype.getErrorResponse = function(response) {
    alert('response for login request');
    alert(response);
};