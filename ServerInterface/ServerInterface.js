function ServerInterface(){
	this.serverAddress = 'http://www.mocky.io';
	this.urlDict = {
		login : this.serverAddress+'/v2/588231012800001a06cbd424',
		exit : this.serverAddress+'/online-school/signout',
		signup: this.serverAddress+'/v2/58824410280000ff08cbd437',
		createCourse: this.serverAddress+'/online-school/course/create',
		readCourse: this.serverAddress+'/online-school/course/read',
        showLessonsList: this.serverAddress+'/v2/5881ff36250000dc23c9eed0',
        requestCourseDescription: this.serverAddress+'/v2/588350c5280000f534cbd4c8'
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
			requestObj[request[i][0]+""] = request[i][1];
		}
    }

    if(!!$.cookie('sessionId')){
        requestObj['sessionId'] = $.cookie('sessionId');
    }
	console.log('ajax is starting');
	console.log(requestObj);
	requestObj = JSON.stringify(requestObj);
    console.log('after making json:');
    console.log(requestObj);
    $.ajax({
        url: requestUrl,
        dataType   : 'jsonp',
        contentType: 'application/json;charset=utf8',
        type: 'POST',
        data: requestObj,

        success: function(r){
            //console.log('success respone before parse:');
            //console.log(r);
            sFunc(r);
        },

        error: function(e){
            console.log('error in ajax:');
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
