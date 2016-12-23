/**
 * Created by Mohammad on 12/23/2016.
 */

function ShowLessons(inputFields){
    this.courseFields = inputFields;
}

ShowLessons.prototype.getSuccessResponse = function(response){
    alert('successful response from show lessons request sent to server:');
    console.log(response);

    console.log('success parse:');
    console.log(response['response']);
};

ShowLessons.prototype.getErrorResponse = function(response){
    alert('error in show lessons Request :');
    console.log(response);

    console.log('error parse:');
    console.log(JSON.parse(response));

};

ShowLessons.prototype.requestCreateCourse = function(response){
    var requestAry = this.courseFields;
    var serverInterfaceObj = new ServerInterface();
    serverInterfaceObj.doRequest(requestAry,this.getSuccessResponse,this.getErrorResponse);
    console.log('request for show lessons has been sent');

};
