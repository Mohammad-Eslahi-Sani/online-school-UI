/**
 * Created by Mohammad on 12/8/2016.
 */

function ExitAgent(){
}

ExitAgent.prototype.requestExit = function(){
    var requestAry = [["task","exit"]];
    var serverInterfaceObj = new ServerInterface();
    serverInterfaceObj.doRequest(requestAry,this.getSuccessResponse,this.getErrorResponse);
    console.log('request for login has been sent');
};

ExitAgent.prototype.getSuccessResponse = function(response){
    alert('You have been signed out successfully!');
    console.log(response);

    if(response['response']=='error'){
        console.log("signout success response says error");
    }
    else{
        var rd = new RedirectManager();
        rd.redirectTo('MainPage');
    }

};

ExitAgent.prototype.getErrorResponse = function(response) {
    alert('Unable to exit!');
    console.log(response);
};