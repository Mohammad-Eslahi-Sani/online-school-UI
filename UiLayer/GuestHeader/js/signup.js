/**
 * Created by Mohammad on 12/26/2016.
 */

function signUpConfirmListener(){
    var usernameInput = $('input#signUp-username').val();
    var passwordInput = $('input#signUp-password').val();
    var passwordAgainInput = $('input#signUp-re-password').val();
    var userTypeInput = $('select#role option:selected').val();
//        var userTypeInput = $("#role").data("kendoComboBox");
    var defaultValue = '---';

//        var nameInput = $('.name-row .nameInput').val();
    var nameInput = usernameInput;
//        var familyInput = $('.family-row .familyInput').val();
    var familyInput = defaultValue;
//        var nationalNumberInput = $('.nationalNumber-row .nationalNumberInput').val();
    var nationalNumberInput = defaultValue;
//        var fieldInput = $('.field-row .fieldInput').val();
    var fieldInput = 'computerScience';
//        var gradeInput = $('.grade-row .gradeInput').val();
    var gradeInput = 'bachelor';
        var emailInput = $('input#signUp-email').val();
//    var emailInput = defaultValue;
//        var phoneNumberInput = $('.phoneNumber-row .phoneNumberInput').val();
    var phoneNumberInput = defaultValue;

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
        ['birthDate',0],
        ['field',fieldInput],
        ['grade',gradeInput]
    ];

    var requestParameters = {
        requestType: 'signup',
        inputList: parametersAry
    };
    ControllerInterfaceObj.setRequestParameters(requestParameters);
    ControllerInterfaceObj.executeRequest();

}

$(document).ready(function() {
    // create ComboBox from select HTML element
    $("#role").kendoComboBox();
    $('input#signUp-confirm').on('click',signUpConfirmListener);

    var signUpWindow = $("#signUpWindow"),
        showSignUpWindow = $("nav ul#menu a#showSignUpWindow");

    showSignUpWindow.click(function() {
        signUpWindow.data("kendoWindow").center().open();
//            showSignUpWindow.fadeOut();
    });

    function onClose() {
//            showSignUpWindow.fadeIn();
    }

    signUpWindow.kendoWindow({
        width: "300px",
        title: "À»  ‰«„",
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
