/**
 * Created by Mohammad on 12/25/2016.
 */

function searchListener(){
    var searchKey = $('input#search-input').val();
    if(!searchKey){
        alert('⁄»«— ? —« »—«? Ã” ÃÊ Ê«—œ ò‰?œ.');
    }
    else{
        var searchParametersList = [['task','exit'],['key',searchKey]];
        var requestParameters = {
            requestType:'search',
            inputList:searchParametersList
        };

        ControllerInterfaceObj.setRequestParameters(requestParameters);
        ControllerInterfaceObj.executeRequest();
    }
}

$(document).ready(function() {
    $('nav span#search-button').on('click',searchListener);
});