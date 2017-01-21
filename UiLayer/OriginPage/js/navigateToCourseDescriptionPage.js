/**
 * Created by Mohammad on 1/21/2017.
 */

function goToDescriptionPage(){
    var parametersList = [];
    var requestParameters = {
        requestType:'redirection',
        redirectUrl:'courseDescription'
    };

    var cookieOption = {
        path: '/',
        expires:1
    };
    var lessonId = $(this).parent().attr('id');
    lessonId = lessonId.slice(6);       // lessonId example : lesson1023  --> 1023
    $.cookie('courseId',lessonId,cookieOption);
    ControllerInterfaceObj.setRequestParameters(requestParameters);
    ControllerInterfaceObj.executeRequest();
}


$(document).ready(function(){
    $('a.goToDescriptionPage').on('click',goToDescriptionPage);
});
