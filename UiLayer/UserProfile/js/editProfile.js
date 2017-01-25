function editProfile(){
    var usernameInput = $('input#profile-username').val();
    var passwordInput = $('input#profile-password').val();
    var userTypeInput = $('select#profile-role option:selected').val();
//        var userTypeInput = $("#role").data("kendoComboBox");
    var defaultValue = '---';

//        var nameInput = $('.name-row .nameInput').val();
    var nameInput = $('input#profile-name').val();
//        var familyInput = $('.family-row .familyInput').val();
    var familyInput = $('input#profile-family').val();
//        var nationalNumberInput = $('.nationalNumber-row .nationalNumberInput').val();
    var nationalNumberInput = $('input#profile-nationalNumber').val();
//        var fieldInput = $('.field-row .fieldInput').val();
    var fieldInput = 'computerScience';
//        var gradeInput = $('.grade-row .gradeInput').val();
    var gradeInput = 'bachelor';
        var emailInput = $('input#profile-email').val();
//    var emailInput = defaultValue;
//        var phoneNumberInput = $('.phoneNumber-row .phoneNumberInput').val();
    var phoneNumberInput = $('input#profile-phoneNumber').val();
    var birthDateInput = $('input#profile-birthDate').val();


    var parametersAry =[
        ['task','signup'],
        ['username',usernameInput],
        ['password',passwordInput],
        ['role',userTypeInput],
        ['name',nameInput],
        ['family',familyInput],
        ['balance',0],
        ['email',emailInput],
        ['phoneNumber',phoneNumberInput],
        ['nationalNumber',nationalNumberInput],
        ['birthDate',birthDateInput],
        ['field',0],
        ['grade',0]
    ];

    var requestParameters = {
        requestType: 'signup',
        inputList: parametersAry
    };
    ControllerInterfaceObj.setRequestParameters(requestParameters);
    ControllerInterfaceObj.executeRequest();

}

$(document).ready(function() {
    $('button#profile-confirm').on('click',editProfile);
});