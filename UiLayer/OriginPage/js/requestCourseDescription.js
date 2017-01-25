/**
 * Created by Mohammad on 1/21/2017.
 */

function getUrlParameter(sParam) {
    var sPageURL = decodeURIComponent(window.location.search.substring(1)),
        sURLVariables = sPageURL.split('&'),
        sParameterName,
        i;

    for (i = 0; i < sURLVariables.length; i++) {
        sParameterName = sURLVariables[i].split('=');

        if (sParameterName[0] === sParam) {
            return sParameterName[1] === undefined ? true : sParameterName[1];
        }
    }
};

function requestCourseDescription(){
    var courseId = 1;

    courseId = getUrlParameter('lessonId');
    if(!!courseId){
        courseId = 1;
    }
    console.log('courseId: '+courseId)

    var parametersList = [['task','requestCourseDescription'],['id',courseId]];
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
