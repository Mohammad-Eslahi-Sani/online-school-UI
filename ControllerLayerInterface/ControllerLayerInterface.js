/**
 * Created by Mohammad on 12/2/2016.
 */
$.getScript('/ControllerLayer/RedirectManager/RedirectManger.js');
$.getScript('/ControllerLayer/SignupAgent/SignupAgent.js');
$.getScript('/ControllerLayer/LoginAgent/LoginAgent.js');

function ControllerLayerInterface(){
    this.requestParameters = {};
}

ControllerLayerInterface.prototype.setRequestParameters = function(inRequestParameters){
    this.requestParameters = inRequestParameters;
};

ControllerLayerInterface.prototype.executeRequest = function(){
    var requestType = this.requestParameters['requestType'];
    switch (requestType){
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
            this.requestParameters['redirectionUrl'] = 'MainPage';
            this.exit();
            this.redirect();
            break;
        default :
            break;
    }
};

ControllerLayerInterface.prototype.redirect = function(){
    var redirectObj = new RedirectManager();
    redirectObj.redirectTo(this.requestParameters['redirectUrl']);
};

ControllerLayerInterface.prototype.search = function(){

};

ControllerLayerInterface.prototype.signUp = function(){
    var parametersAry = this.requestParameters['signupParametersList'];
    var agent = new SignupAgent();
    // agent.checkFields(usernameInput,passwordInput,passwordAgainInput,userTypeInput);
    agent.setRequestAry(parametersAry);
    agent.requestSignup();
};

ControllerLayerInterface.prototype.login = function(){
    var lAgent = new LoginAgent(this.requestParameters['loginParametersList']);
    lAgent.requestLogin();
};

ControllerLayerInterface.prototype.announce = function(){

};

ControllerLayerInterface.prototype.exit = function(){

};
