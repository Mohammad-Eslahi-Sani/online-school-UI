function LoginAgent(username,password){
	this.username = username;
	this.password = password;
}

LoginAgent.prototype.requestLogin = function(){
	var requestAry = [['task','login'],['j_username',this.username],['j_password',this.password]];
	var interfaceObj = new UiLogicInterface();
	interfaceObj.doRequest(requestAry,this.getLoginResponse);
	console.log('request for signup has been sent');
}

LoginAgent.prototype.getLoginResponse = function(response){
	alert('response for login request');
	alert(response);
	var redirector = new RedirectManager();
	redirector.setParametersList([['username','اصلاحی']])
	redirector.redirectTo('teacherMainPage');
}