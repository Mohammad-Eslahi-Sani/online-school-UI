/**
 * Created by Mohammad on 12/26/2016.
 */
var requiredFormValidator = $("form#required-fields-form").kendoValidator().data("kendoValidator");

function signUpConfirmListener(){
    event.preventDefault();
    if (requiredFormValidator.validate()) {
        var usernameInput = $('input#signUp-username').val();
        var passwordInput = $('input#signUp-password').val();
        var passwordAgainInput = $('input#signUp-re-password').val();
        var userTypeInput = $('.userType-row .userType-select option:selected').val();
    //        var userTypeInput = $("#role").data("kendoComboBox");
        var defaultValue = '---';

    //        var nameInput = $('.name-row .nameInput').val();
        var nameInput = usernameInput;
    //        var familyInput = $('.family-row .familyInput').val();
        var familyInput = defaultValue;
    //        var nationalNumberInput = $('.nationalNumber-row .nationalNumberInput').val();
        var nationalNumberInput = defaultValue;
    //        var fieldInput = $('.field-row .fieldInput').val();
        var fieldInput = defaultValue;
    //        var gradeInput = $('.grade-row .gradeInput').val();
        var gradeInput = defaultValue;
    //        var emailInput = $('.email-row .emailInput').val();
        var emailInput = defaultValue;
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
    } else {
        alert('·ÿ›«  „«„ ›?·œ Â« —« »Â œ—” ? ò«„· ò‰?œ');
    }
}
function onSuccessUpload(e) {
    alert('›«?· ‘„« »Â œ—” ? «—”«· ‘œ')

}
function addExtensionClass(extension) {
    switch (extension) {
        case '.jpg':
        case '.img':
        case '.png':
        case '.gif':
            return "img-file";
        case '.doc':
        case '.docx':
            return "doc-file";
        case '.xls':
        case '.xlsx':
            return "xls-file";
        case '.pdf':
            return "pdf-file";
        case '.zip':
        case '.rar':
            return "zip-file";
        default:
            return "default-file";
    }
}
$(document).ready(function() {
    //making tabs for signup window
    $("div#signUpWindow").kendoTabStrip({
        animation:  {
            open: {
                effects: "fadeIn"
            }
        }
    }).select(0);


    $('button#signUp-form-submit').on('click',signUpConfirmListener);

    //making upload file
    $("#files").kendoUpload({
        multiple: false,
        async: {
            "saveUrl": "http://localhost:8081/online-school/rest/upload?type=logo",
            "removeUrl": "http://localhost:8081/online-school/",
            "autoUpload": false
        },
        "localization": {
            "cancel": "«‰’—«›",
            "remove": "Å«ò ò—œ‰",
            "retry": " ·«‘ „Ãœœ",
            "select": "«‰ Œ«» ⁄ò”",
            "statusFailed": "Œÿ·«",
            "statusUploaded": "¬Å·Êœ »« „Ê›ﬁ?  «‰Ã«„ ‘œ",
            "statusUploading": "œ— Õ«· ¬Å·Êœ",
            "uploadSelectedFiles": "¬Å·Êœ ›«?·",
            "headerStatusUploading": "¬Å·Êœ",
            "headerStatusUploaded": "«‰Ã«„ ‘œ"
        },
        "success": onSuccessUpload,
        template: kendo.template($('#fileTemplate').html())
    });







    $("input#grade-input").kendoComboBox({
        "template": "<span >#: data.text #<\/span>",
        "dataTextField": "text",
        "dataValueField": "id",
        "autoBind": false,
        //"change": onChange,
        //"dataBound": onDataBound,
        "minLength": 3.0,
        "dataSource": {
            "schema": {
                "total": "total",
                "data": "data",
                "error": "errors"
            },
            "serverFiltering": true,
            "transport": {
                "read": {
                    "type": "POST",
                    "contentType": "application/json",
                    "url": "http://localhost:8081/online-school/course/grade"
                },
                "parameterMap": function parameterMap(options) {
                    return JSON.stringify(options);
                }
            }
        }
    });

    // create ComboBox
    $("input#role-input").kendoComboBox({
        "template": "<span >#: data.text #<\/span>",
        "dataTextField": "text",
        "dataValueField": "id",
        "autoBind": false,
        //"change": onChange,
        //"dataBound": onDataBound,
        "minLength": 3.0,
        "dataSource": {
            "schema": {
                "total": "total",
                "data": "data",
                "error": "errors"
            },
            "serverFiltering": true,
            "transport": {
                "read": {
                    "type": "POST",
                    "contentType": "application/json",
                    "url": "http://localhost:8081/online-school/user/role"
                },
                "parameterMap": function parameterMap(options) {
                    return JSON.stringify(options);
                }
            }
        }
    });

    $("input#field-input").kendoComboBox({
        "template": "<span >#: data.text #<\/span>",
        "dataTextField": "text",
        "dataValueField": "id",
        "autoBind": false,
        //"change": onChange,
        //"dataBound": onDataBound,
        "minLength": 3.0,
        "dataSource": {
            "schema": {
                "total": "total",
                "data": "data",
                "error": "errors"
            },
            "serverFiltering": true,
            "transport": {
                "read": {
                    "type": "POST",
                    "contentType": "application/json",
                    "url": "http://localhost:8081/online-school/user/role"
                },
                "parameterMap": function parameterMap(options) {
                    return JSON.stringify(options);
                }
            }
        }
    });


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
