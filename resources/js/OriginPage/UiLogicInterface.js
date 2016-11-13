function UiLogicInterface(){
	this.urlDict = {
		login : 'http://172.17.8.64:8080/online-school/j_spring_security_check',
		signup: 'http://172.17.8.64:8080/online-school/signup',
		createCourse: 'http://172.17.8.64:8080/online-school/course/create',
		readCourse: 'http://172.17.8.64:8080/online-school/course/read'
	}
	this.successFunction;
}

UiLogicInterface.prototype.doRequest = function(request,sFunc){
	this.successFunction = sFunc;
	var requestObj = {};
	var requestUrl; 
	for(var i=0 ; i < request.length ; i++){
		if(request[i][0]=='task'){
			requestUrl = this.urlDict[request[i][1]];
		}
		else{
			requestObj[request[i][0]+""] = request[i][1]+"";
		}

	}
	
	alert('ajax is starting');
	console.log(JSON.stringify(requestObj));
	console.log(requestUrl);
	var x = "{\""+request[1][0]+"\":\""+request[1][1]+"hmkcode\",\"id\":2}"
	$.ajax({
		url: requestUrl,
		dataType   : 'json',
    	contentType: 'application/json',
    	mimeType: 'application/json',
		type: 'POST',
		data: x,

		success: function(r){
			r = JSON.parse(r);
			this.getResponse(r);
		},

		error: function(e){
			alert('error in ajax:');
			alert(e);
		}
			})
}

UiLogicInterface.prototype.getResponse = function(response){
	alert(response);
	this.successFunction(response);
}