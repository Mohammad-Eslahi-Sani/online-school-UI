/**
 * Created by Mohammad on 12/23/2016.
 */

function JoinCourse(inputFields){
    this.courseFields = inputFields;

}


JoinCourse.prototype.getSuccessResponse = function(response) {
    alert('successful response from join course request sent to server:');
    console.log(response);

    console.log('success parse:');
    console.log(response['response']);

};

JoinCourse.prototype.getErrorResponse = function(response) {
    alert('error in join course Request :');
    console.log(response);

    console.log('error parse:');
    console.log(JSON.parse(response));

};

JoinCourse.prototype.requestJoinCourse = function(response){
    var requestAry = this.courseFields;
    //if(!!requestAry.length){
    //	requestAry = [['task','signup'],["username",'ali'],["password",'123'],["role",'teacher']];
    //}
    var serverInterfaceObj = new ServerInterface();
    serverInterfaceObj.doRequest(requestAry,this.getSuccessResponse,this.getErrorResponse);
    console.log('request for join course has been sent');

};
