/**
 * Created by Mohammad on 12/23/2016.
 */
function SearchAgent(inputFields){
    this.searchFields = inputFields;
}

SearchAgent.prototype.getSuccessResponse = function(response){
    alert('successful response from search course request sent to server:');
    console.log(response);

    console.log('success parse:');
    console.log(response['response']);
};

SearchAgent.prototype.getErrorResponse = function(response){
    alert('error in create search course Request :');
    console.log(response);

    console.log('error parse:');
    console.log(JSON.parse(response));

};

SearchAgent.prototype.requestSearch = function(){
    var requestAry = this.searchFields;
    var serverInterfaceObj = new ServerInterface();
    serverInterfaceObj.doRequest(requestAry,this.getSuccessResponse,this.getErrorResponse);
    console.log('request for search course has been sent');

};





