/**
 * Created by Mohammad on 12/26/2016.
 */

function loginConfirmListener(){
    var usernameInput = $('input#username').val();
    var passwordInput = $('input#password').val();
    var loginParametersList = [['task','login'],['username',usernameInput],['password',passwordInput]];
    var requestParameters = {
        requestType:'login',
        inputList:loginParametersList
    };

    ControllerInterfaceObj.setRequestParameters(requestParameters);
    ControllerInterfaceObj.executeRequest();
}
$(document).ready(function() {
    $('input#login-confirm').on('click',loginConfirmListener);

    var myWindow = $("#loginWindow"),
        undo = $("nav ul#menu a#showLoginWindow");

    undo.click(function() {
        myWindow.data("kendoWindow").center().open();
//            undo.fadeOut();
    });

    function onClose() {
//            undo.fadeIn();
    }

    myWindow.kendoWindow({
        width: "300px",
        title: "Ê—Êœ",
        visible: false,
        actions: [
            "Pin",
            "Minimize",
            "Maximize",
            "Close"
        ],
        close: onClose
    }).data("kendoWindow");



});

