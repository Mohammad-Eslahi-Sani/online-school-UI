/**
 * Created by Mohammad on 1/21/2017.
 */

function requestCourseDescription(){
    var courseId = 1000;


    if(!!$.cookie('courseId')){
        courseId = $.cookie('courseId');
    }


    var parametersList = [['task','requestCourseDescription'],['courseId',courseId]];
    var requestParameters = {
        requestType:'courseDescription',
        inputList:parametersList
    };

    ControllerInterfaceObj.setRequestParameters(requestParameters);
    ControllerInterfaceObj.executeRequest();

}

$(document).ready(function(){
    requestCourseDescription();

});
