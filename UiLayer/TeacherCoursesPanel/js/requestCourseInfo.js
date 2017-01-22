/**
 * Created by Mohammad on 1/22/2017.
 */

function requestCourseInfo(){
    var courseId = 1000;
    courseId = $(this).parent().attr('id');
    courseId = courseId.slice(6);   //course1203 -> 1203
    if(!courseId){
        alert('unable to detect the course you choose');
    }

    var sId = $.cookie('sessionId');
    var parametersList = [['task','getCourseForTeacher'],['courseId',courseId],['sessionId',sId]];
    var requestParameters = {
        requestType:'getCourseForTeacher',
        inputList:parametersList
    };

    ControllerInterfaceObj.setRequestParameters(requestParameters);
    ControllerInterfaceObj.executeRequest();
}
