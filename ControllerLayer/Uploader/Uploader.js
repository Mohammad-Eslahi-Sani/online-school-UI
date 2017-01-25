/**
 * Created by Mohammad on 1/24/2017.
 */

function Uploader(inputList){
    this.fields = inputList;
}

Uploader.prototype.requestUpload = function(){
    var requestAry = this.fields;


    var serverInterfaceObj = new ServerInterface();
    serverInterfaceObj.doRequest(requestAry,this.getSuccessResponse,this.getErrorResponse);
    console.log('request for upload has been sent');
};

Uploader.prototype.getSuccessResponse = function(response){
    alert('Upload has been successful');
    console.log(response['sessionId']);
    console.log(response['role']);

};

LoginAgent.prototype.getErrorResponse = function(response) {
    console.log('Unable to Upload!');
    console.log(response);

};