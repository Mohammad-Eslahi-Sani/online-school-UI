function RedirectManager(){
	this.loginUrl = 'Login.html';
	this.signupUrl = 'Signup.html';
	this.teacherMainPageUrl = 'TeacherMainPage.php';
	this.studentMainPageUrl = 'StudentMainPage.php';
	this.teacherCoursePageUrl = 'TeacherCoursePage.php';
	this.studentCoursePageUrl = 'StudentCoursePage.php';
	this.mainPageUrl = 'MainPage.html';
	this.parametersList = [];
}

RedirectManager.prototype.redirectTo = function(destUrl){
	switch(destUrl){
		case 'StudentMainPage':
		case 'studentMainPage':
			destUrl = this.studentMainPageUrl;
			break;
		case 'TeacherMainPage':
		case 'theacherMainPage':
			destUrl = this.teacherMainPageUrl;
			break;
		case 'Login':
		case 'login':
			destUrl = this.loginUrl;
			break;
		case 'Signup':
		case 'signup':
			destUrl = this.signupUrl;
			break;
		case 'StudentCoursePage':
		case 'studentCoursePage':
			destUrl = this.studentCoursePageUrl;
			break;
		case 'TeacherCoursePage':
		case 'teacherCoursePage':
			destUrl = this.teacherCoursePageUrl;
			break;
		default:
			destUrl = this.mainPageUrl;
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