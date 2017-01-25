function ProfileLoader(inputList){
	this.fields = inputList;
}

ProfileLoader.prototype.requestProfile = function(){
	var requestAry = this.fields;
    
    var serverInterfaceObj = new ServerInterface();
    serverInterfaceObj.doRequest(requestAry,this.getSuccessResponse,this.getErrorResponse);
	console.log('request for profile has been sent');
};

ProfileLoader.prototype.getSuccessResponse = function(response){
	console.log('success response for profile request');
	

    var name = response['name'];
    var family = response['family'];
    var username = response['username'];
    var password = response['password'];
    var role = response['role'];
    var email = response['email'];
    var nationalNumber = response['nationalNumber'];
    var birthDate = response['birthDate'];
    var balance = response['balance'];
    var phoneNumber = response['phoneNumber'];


    if(!!name){
        $('input#profile-name').val(name);        
    }

    if(!!family){
        $('input#profile-family').val(family);        
    }

    if(!!username){
        $('input#profile-username').val(username);        
    }
    if(!!password){
        $('input#profile-password').val(password);        
    }
    if(!!role){
        $('select#profile-role').val(role);        
    }

    if(!!email){
        $('input#profile-email').val(email);       
    }
    if(!!nationalNumber){
        $('input#profile-nationalNumber').val(nationalNumber);        
    }
    if(!!phoneNumber){
        $('input#profile-phoneNumber').val(phoneNumber);        
    }

    if(!!birthDate){
        $('input#profile-birthDate').val(birthDate);        
    }
};

ProfileLoader.prototype.getErrorResponse = function(response) {
    console.log('Unable to get profile!');
    console.log(response);


};