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
    alert('successful response for exit request');
    console.log(response);

    if(response['response']=='error'){
        console.log("unable to exit!");
    }

};

ExitAgent.prototype.getErrorResponse = function(response) {
    alert('Unable to exit!');
    console.log(response);
};