/**
 * Created by Mohammad on 12/2/2016.
 */
function ControllerLayerInterface(){
    this.requestParameters = {};
}

ControllerLayerInterface.prototype.setRequestParameters = function(inRequestParameters){
    this.requestParameters = inRequestParameters;
};

ControllerLayerInterface.prototype.executeRequest = function(){
    var requestType = this.requestParameters['requestType'];
    switch (requestType){
        case 'courseDescription':
        case 'lessonDescription':
            this.courseDescription();
            break;
        case 'showLessons':
        case 'getLessonsList':
        case 'showLessonsList':
            this.showLessons();
            break;
        case 'search':
            this.search();
            break;
        case 'redirection':
            this.redirect();
            break;
        case 'signup':
        case 'signUp':
        case 'SignUp':
            this.signUp();
            break;
        case 'login':
        case 'Login':
            this.login();
            break;
        case 'announce':
            this.announce();
            break;
        case 'exit':
            //this.requestParameters['redirectionUrl'] = 'MainPage';
            this.exit();
            //this.redirect();
            break;
        case 'createCourse':
            this.createCourse();
            break;
        default :
            console.log("request type not handled in controller layer interface");
            break;
    }
};

ControllerLayerInterface.prototype.redirect = function(){
    var redirectObj = new RedirectManager();
    redirectObj.redirectTo(this.requestParameters['redirectUrl']);
};

ControllerLayerInterface.prototype.search = function(){
    var sAgent = new SearchAgent(this.requestParameters['inputList']);
    sAgent.requestSearch();

};

ControllerLayerInterface.prototype.courseDescription = function(){
    console.log('we have come here;');
    var describeAgent = new CourseDescriptionRequestor(this.requestParameters['inputList']);
    describeAgent.requestCourseDescription();
};


ControllerLayerInterface.prototype.signUp = function(){
    var parametersAry = this.requestParameters['inputList'];
    var agent = new SignupAgent();
    // agent.checkFields(usernameInput,passwordInput,passwordAgainInput,userTypeInput);
    agent.setRequestAry(parametersAry);
    agent.requestSignup();
};

ControllerLayerInterface.prototype.login = function(){
    var lAgent = new LoginAgent(this.requestParameters['inputList']);
    lAgent.requestLogin();
};

ControllerLayerInterface.prototype.showLessons = function(){
    var showLessonsAgent = new ShowLessons(this.requestParameters['inputList']);
    showLessonsAgent.requestLessonsList();
};


ControllerLayerInterface.prototype.announce = function(){

};

ControllerLayerInterface.prototype.createCourse = function(){
    var lAgent = new CourseCreator(this.requestParameters['inputList']);
    lAgent.requestCreateCourse();
};

ControllerLayerInterface.prototype.exit = function(){
    var lAgent = new ExitAgent();
    lAgent.requestExit();
};
