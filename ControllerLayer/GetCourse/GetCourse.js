/**
 * Created by Mohammad on 12/23/2016.
 */

function GetCourse(inputFields){
    this.courseFields = inputFields;
}

GetCourse.prototype.getSuccessResponse = function(response){
    alert('successful response from get course request sent to server:');
    console.log(response);

    console.log('success parse:');
    console.log(response['response']);
};

GetCourse.prototype.getErrorResponse = function(response){
    alert('error in get course Request :');
    console.log(response);

    console.log('error parse:');
    console.log(JSON.parse(response));

};

GetCourse.prototype.requestCreateCourse = function(response){
    var requestAry = this.courseFields;
    var serverInterfaceObj = new ServerInterface();
    serverInterfaceObj.doRequest(requestAry,this.getSuccessResponse,this.getErrorResponse);
    console.log('request for get course has been sent');

};
