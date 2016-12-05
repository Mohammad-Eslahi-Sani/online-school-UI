/**
 * Created by Mohammad on 12/2/2016.
 */

function UiInterface(){
    this.requestParameters = {};
}

UiInterface.prototype.setRequestParameters = function(inRequestParameters){
    this.requestParameters = inRequestParameters;
}

UiInterface.prototype.redirect = function(){
    var redirectObj = new RedirectManager();
    redirectObj.redirectTo(this.requestParameters['redirectUrl']);
};

UiInterface.prototype.search = function(){

};

UiInterface.prototype.signUp = function(){
    var usernameInput = this.requestParameters['usernameInput'];
    var passwordInput = this.requestParameters['passwordInput'];
    var passwordAgainInput = this.requestParameters['passwordAgainInput'];
    var userTypeInput = this.requestParameters['userTypeInput'];

    var parametersAry =[
        ['task','signup'],
        ['_username',usernameInput],
        ['_password',passwordInput],
        ['_role',userTypeInput],
        ['_name',usernameInput],
        ['_family',''],
        ['_balance',0],
        ['_email',''],
        ['_phoneNumber',0],
        ['_nationalNumber',0],
        ['_birthDate',0],
        ['_field','CE'],
        ['_grade','bachelor']
    ];
    var agent = new SignupAgent(usernameInput,passwordInput,passwordAgainInput,userTypeInput);
    // agent.checkFields(usernameInput,passwordInput,passwordAgainInput,userTypeInput);
    agent.setRequestAry(parametersAry);
    agent.requestSignup(usernameInput,passwordInput,userTypeInput);
};

UiInterface.prototype.login = function(){
    var lAgent = new LoginAgent(this.requestParameters['usernameInput'],this.requestParameters['passwordInput']);
    lAgent.requestLogin();
};

UiInterface.prototype.announce = function(){

};

UiInterface.prototype.exit = function(){

};



