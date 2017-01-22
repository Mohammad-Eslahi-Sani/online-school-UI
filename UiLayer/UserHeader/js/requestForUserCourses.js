/**
 * Created by Mohammad on 1/22/2017.
 */

function requestForUserCourses(){
    var parametersList = [['task','requestUserCoursesList']];
    var requestParameters = {
        requestType:'userCoursesList',
        inputList:parametersList
    };

    ControllerInterfaceObj.setRequestParameters(requestParameters);
    ControllerInterfaceObj.executeRequest();
}

$(document).ready(function(){
    requestForUserCourses();
});