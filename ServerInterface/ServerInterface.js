function UiLogicInterface(){
	this.urlDict = {
		login : 'http://172.18.242.188:8080/online-school/j_spring_security_check',
		signup: 'http://172.18.242.188:8080/online-school/signup',
		createCourse: 'http://172.18.242.188:8080/online-school/course/create',
		readCourse: 'http://172.18.242.188/online-school/course/read'
	};
	//this.successFunction;
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
	console.log(requestObj);
	requestObj = JSON.stringify(requestObj);
	test = JSON.stringify({ username: "Gerry", role: "20", password: "Sydney" });
	console.log(requestObj);
	console.log(test);

/*$.ajax({
  type: "POST",
  url: "http://172.18.242.188:8080/online-school/signup",
  data: requestObj,
  contentType: 'application/json',
  success: function(data) {
    if(data.status == 'OK') alert('Person has been added');
    else alert('Failed adding person: ' + data.status + ', ' + data.errorMessage);
  }
});*/

	// console.log(requestUrl);
	// var x = "{\""+request[1][0]+"\":\""+request[1][1]+"hmkcode\",\"id\":2}"
	$.ajax({
		url: requestUrl,
		dataType   : 'json',
    	contentType: 'application/json',
    	mimeType: 'application/json',
		type: 'POST',
		data: requestObj,

		success: function(r){
			r = JSON.parse(r);
			this.getResponse(r);
		},

		error: function(e){
			alert('error in ajax:');
			alert(e);
		}
			})
};

UiLogicInterface.prototype.getResponse = function(response){
	alert(response);
	this.successFunction(response);
};