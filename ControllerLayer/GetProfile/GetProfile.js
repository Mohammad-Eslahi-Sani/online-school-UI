/**
 * Created by Mohammad on 12/23/2016.
 */

function GetProfile(inputFields){
    this.profileFields = inputFields;
}

GetProfile.prototype.getSuccessResponse = function(response){
    alert('successful response from get profile request sent to server:');
    console.log(response);

    console.log('success parse:');
    console.log(response['response']);

    serverAddress = $.cookie('serverAddress');
    $('img#course-img').attr(serverAddress+response['avatar']);
  $('input#profile-name').val(response['name']);
    $('input#profile-family').val(response['family']);
    $('input#profile-username').val(response['username']);
    $('input#profile-password').val(response['password']);
    $('input#profile-email').val(response['email']);
    $('select#profile-role').val(response['role']);
    $('input#profile-phoneNumber').val(response['phoneNumber']);
    $('input#profile-nationalNumber').val(response['nationalNumber']);
    $('input#profile-birthDate').val(response['birthDate'].getFullYear());

      
};

GetProfile.prototype.getErrorResponse = function(response){
    alert('error in get profile Request :');
    console.log(response);

    console.log('error parse:');
    console.log(JSON.parse(response));

};

GetProfile.prototype.requestCreateCourse = function(response){
    var requestAry = this.profileFields;
    var serverInterfaceObj = new ServerInterface();
    serverInterfaceObj.doRequest(requestAry,this.getSuccessResponse,this.getErrorResponse);
    console.log('request for get profile has been sent');

};
