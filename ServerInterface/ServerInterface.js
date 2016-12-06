function ServerInterface(){
	this.serverAddress = 'http://172.18.242.188:8080';
	this.urlDict = {
		login : this.serverAddress+'/online-school/j_spring_security_check',
		signup: this.serverAddress+'/online-school/signup',
		createCourse: this.serverAddress+'/online-school/course/create',
		readCourse: this.serverAddress+'/online-school/course/read'
	};
}

ServerInterface.prototype.doRequest = function(request,sFunc,eFunc){
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
    console.log('after making json:');
    console.log(requestObj);
    $.ajax({
        url: requestUrl,
        dataType   : 'json',
        contentType: 'application/json',
        mimeType: 'application/json',
        type: 'POST',
        data: requestObj,

        success: function(r){
            r = JSON.parse(r);
            sFunc(r);
        },

        error: function(e){
            alert('error in ajax:');
            eFunc(e);
        }
    });




    //var test = JSON.stringify({ username: "Gerry", role: "20", password: "Sydney" });
	//console.log(test);

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
};
