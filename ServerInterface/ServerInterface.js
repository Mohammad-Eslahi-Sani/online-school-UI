function ServerInterface(){
	this.serverAddress = 'http://www.mocky.io';
    this.schoolServer = 'http://localhost:8081/online-school';
	this.urlDict = {
		// login : this.serverAddress+'/v2/588231012800001a06cbd424',
        login : this.schoolServer+'/login',

		// exit : this.serverAddress+'/online-school/signout',
        exit : this.schoolServer+'/signout',
		
        // signup: this.serverAddress+'/v2/58824410280000ff08cbd437',
        signup: this.schoolServer+'/signup',
		
        // createCourse: this.serverAddress+'/online-school/course/create',
        createCourse: this.schoolServer+'/course/create',
		
        // readCourse: this.serverAddress+'/online-school/course/read',
        readCourse: this.schoolServer+'/course/read',
        
        // showLessonsList: this.serverAddress+'/v2/5881ff36250000dc23c9eed0',
        showLessonsList: this.schoolServer+'/course/read',
        
        // requestCourseDescription: this.serverAddress+'/v2/588350c5280000f534cbd4c8',
        requestCourseDescription: this.schoolServer+'/course/course?id=',
        
        // requestUserCoursesList: this.serverAddress+'/v2/588459650f00001a1f31c069',
        requestUserCoursesList: this.schoolServer+'/v2/588459650f00001a1f31c069',
        
        // getCourseForTeacher: this.serverAddress+'/v2/588512040f00004210ff6504',
        getCourseForTeacher: this.schoolServer+'/v2/588512040f00004210ff6504',
        
        upload:this.schoolServer+'/online-school/rest/upload',
        // upload:this.schoolServer+'/online-school/rest/upload',


        loadProfile:this.schoolServer+'/online-school/membership/profile'
        // loadProfile:this.schoolServer+'/online-school/membership/profile'

	};
}

ServerInterface.prototype.doRequest = function(request,sFunc,eFunc){
	var cookieOption = {
        path: '/',
        expires:1
    };
    $.cookie('serverAddress',this.schoolServer,cookieOption);

    
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
	

    if(requestUrl==requestCourseDescription){
        requestUrl+= requestObj['id'];
        requestObj = {};
    }
    console.log('ajax is starting');
	console.log(requestObj);
	requestObj = JSON.stringify(requestObj);
    console.log('after making json:');
    console.log(requestObj);
    


    $.ajax({
        url: requestUrl,
        dataType   : 'json',
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
