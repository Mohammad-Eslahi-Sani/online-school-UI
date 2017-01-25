function RedirectManager(){
	this.urlDictionary = {
        login: '../../UiLayer/Login/Login.html',
        signup: '../../UiLayer/Signup/Signup.html',
        teacherMainPage : '../../UiLayer/UserMainPage/UserMainPage.html',
        studentMainPage : '../../UiLayer/UserMainPage/UserMainPage.html',
        teacherCoursePage: '../../UiLayer/TeacherCoursePage/TeacherCoursePage.html',
        studentCoursePage: '../../UiLayer/StudentCoursePage/StudentCoursePage.html',
        mainPage: '../../UiLayer/MainPage2/index.html',
		signupSuccessful: '../../UiLayer/SignupSuccessful/SignupSuccessful.html',
        courseDescription: '../../UiLayer/CourseDescription/CourseDescription.html'
    };
	this.parametersList = [];
}

RedirectManager.prototype.redirectTo = function(destUrl){
	switch(destUrl){
        case 'courseDescription':
        case 'CourseDescription':
            destUrl = this.urlDictionary['courseDescription'];
            break;
		case 'StudentMainPage':
		case 'studentMainPage':
			destUrl = this.urlDictionary['studentMainPage'];
			break;
		case 'TeacherMainPage':
		case 'teacherMainPage':
            destUrl = this.urlDictionary['teacherMainPage'];
			break;
		case 'Login':
		case 'login':
            destUrl = this.urlDictionary['login'];
			break;
		case 'Signup':
		case 'signup':
            destUrl = this.urlDictionary['signup'];
			break;
		case 'StudentCoursePage':
		case 'studentCoursePage':
            destUrl = this.urlDictionary['studentCoursePage'];
			break;
		case 'TeacherCoursePage':
		case 'teacherCoursePage':
            destUrl = this.urlDictionary['teacherCoursePage'];
			break;
		case 'mainPage':
		case 'MainPage':
			destUrl = this.urlDictionary['mainPage'];
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
    if(!destUrl){
        console.log('problem in finding destination page in redirect manager')
    }
	for(var i = 0;i<this.parametersList.length;i++){
		if(i==0 && !!this.parametersList[0]){
			destUrl += '?' + this.parametersList[i][0] + '=' + this.parametersList[i][1];
		}
		else if(i>0){
			destUrl += '&' + this.parametersList[i][0] + '=' + this.parametersList[i][1];
		}
	}
	window.location.replace(destUrl);
};

RedirectManager.prototype.setParametersList = function(parametersList){
	this.parametersList = parametersList;
};