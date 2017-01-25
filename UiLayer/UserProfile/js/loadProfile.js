function loadProfile(){
    
    var parametersAry =[
        ['task','loadProfile']
    ];

    var requestParameters = {
        requestType: 'loadProfile',
        inputList: parametersAry
    };
    ControllerInterfaceObj.setRequestParameters(requestParameters);
    ControllerInterfaceObj.executeRequest();

}

$(document).ready(function() {
    loadProfile();
});