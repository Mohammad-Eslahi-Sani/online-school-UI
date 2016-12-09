function RedirectManager(){
	this.urlDictionary = {
        loginUrl: '../../UiLayer/Login/Login.html',
        signupUrl: '../../UiLayer/Signup/Signup.html',
        teacherMainPageUrl : '../../UiLayer/TeacherMainPage/TeacherMainPage.html',
        studentMainPageUrl : '../../UiLayer/StudentMainPage/StudentMainPage.html',
        teacherCoursePageUrl: '../../UiLayer/TeacherCoursePage/TeacherCoursePage.html',
        studentCoursePageUrl: '../../UiLayer/StudentCoursePage/StudentCoursePage.html',
        mainPageUrl: '../../UiLayer/MainPage/MainPage.html',
		signupSuccessful: '../../UiLayer/SignupSuccessful/SignupSuccessful.html'
    };
	this.parametersList = [];
}

RedirectManager.prototype.redirectTo = function(destUrl){
	switch(destUrl){
		case 'StudentMainPage':
		case 'studentMainPage':
			destUrl = this.urlDictionary['studentMainPageUrl'];
			break;
		case 'TeacherMainPage':
		case 'theacherMainPage':
            destUrl = this.urlDictionary['teacherMainPageUrl'];
			break;
		case 'Login':
		case 'login':
            destUrl = this.urlDictionary['loginUrl'];
			break;
		case 'Signup':
		case 'signup':
            destUrl = this.urlDictionary['signupUrl'];
			break;
		case 'StudentCoursePage':
		case 'studentCoursePage':
            destUrl = this.urlDictionary['studentCoursePageUrl'];
			break;
		case 'TeacherCoursePage':
		case 'teacherCoursePage':
            destUrl = this.urlDictionary['teacherCoursePageUrl'];
			break;
		case 'mainPage':
		case 'MainPage':
			destUrl = this.urlDictionary['mainPageUrl'];
			break;
		case 'signupSuccessful':
		case 'signUpSuccessful':
		case 'SignupSuccessful':
		case 'SignUpsuccessful':
			destUrl = this.urlDictionary['signupSuccessful'];
			break;
		default:
			destUrl = this.urlDictionary[destUrl];
			break;
	}
	for(var i = 0;i<this.parametersList.length;i++){
		if(i==0 && !!this.parametersList[0]){
			destUrl += '?' + this.parametersList[i][0] + '=' + this.parametersList[i][1];
		}
		else if(i>0){
			destUrl += '&' + this.parametersList[i][0] + '=' + this.parametersList[i][1];
		}
	}
	window.location.href = destUrl;
};

RedirectManager.prototype.setParametersList = function(parametersList){
	this.parametersList = parametersList;
};