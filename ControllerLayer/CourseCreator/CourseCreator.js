/**
 * Created by Mohammad on 12/7/2016.
 */

function CourseCreator(inputFields){
    this.courseFields = inputFields;
}

CourseCreator.prototype.getSuccessResponse = function(response){
    alert('successful response from create course request sent to server:');
    console.log(response);

    console.log('success parse:');
    console.log(response['response']);
};

CourseCreator.prototype.getErrorResponse = function(response){
    alert('error in create course Request :');
    console.log(response);

    console.log('error parse:');
    console.log(JSON.parse(response));

};

CourseCreator.prototype.requestCreateCourse = function(response){
    var requestAry = this.courseFields;
    //if(!!requestAry.length){
    //	requestAry = [['task','signup'],["username",'ali'],["password",'123'],["role",'teacher']];
    //}
    var serverInterfaceObj = new ServerInterface();
    serverInterfaceObj.doRequest(requestAry,this.getSuccessResponse,this.getErrorResponse);
    console.log('request for signup has been sent');

};





