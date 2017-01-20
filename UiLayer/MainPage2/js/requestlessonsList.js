/**
 * Created by Mohammad on 1/20/2017.
 * Handling request for lessons list
 */

function sendRequestForLessons(){
    var parametersList = [['task','showLessonsList']];
    var requestParameters = {
        requestType:'showLessonsList',
        inputList:parametersList
    };

    ControllerInterfaceObj.setRequestParameters(requestParameters);
    ControllerInterfaceObj.executeRequest();
}

$(document).ready(function(){
    sendRequestForLessons();

});
