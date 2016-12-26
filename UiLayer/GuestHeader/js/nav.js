/**
 * Created by Mohammad on 12/26/2016.
 */
var ControllerInterfaceObj = new ControllerLayerInterface();
function homeListener(){
    if(!$.cookie('username')){
        ControllerInterfaceObj.setRequestParameters({requestType:'redirection',redirectUrl:'mainPage'});
    }
    else{
        if($.cookie('userType')=='teacher'){
            ControllerInterfaceObj.setRequestParameters({requestType:'redirection',redirectUrl:'teacherMainPage'});
        }
        else if($.cookie('userType')=='student'){
            ControllerInterfaceObj.setRequestParameters({requestType:'redirection',redirectUrl:'studentMainPage'});
        }
        else{
            ControllerInterfaceObj.setRequestParameters({requestType:'redirection',redirectUrl:'mainPage'});
        }
    }
    ControllerInterfaceObj.executeRequest();

}

$(document).ready(function() {
    $("nav ul#menu").kendoMenu();
    $('.home-div').on('click',homeListener);
});
