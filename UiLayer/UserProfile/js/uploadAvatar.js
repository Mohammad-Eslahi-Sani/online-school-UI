/**
 * Created by Mohammad on 1/24/2017.
 */
var files;
$(document).ready(function(){
    $('input[type=file]#bigImage-input').on('change', prepareUpload);
    $('div.image-edit-button button#bigImage-confirm').on('click',uploadAvatar);

    $("#bigImage-input").kendoUpload({
        multiple: false,
        async: {
            "saveUrl": "http://172.17.242.98:8081/online-school/rest/upload?type=logo",
            "removeUrl": "http://172.17.242.98:8081/online-school/",
            "autoUpload": false
        },
        "localization": {
            "cancel": "انصراف",
            "remove": "پاک کردن",
            "retry": "تلاش مجدد",
            "select": "انتخاب عکس",
            "statusFailed": "خطا",
            "statusUploaded": "آپلود با موفقیت انجام شد",
            "statusUploading": "در حال آپلود",
            "uploadSelectedFiles": "آپلود فایل",
            "headerStatusUploading": "آپلود",
            "headerStatusUploaded": "انجام شد"
        },
        "success": function(){

        },
        template: kendo.template($('#fileTemplate').html())
    });

});

function prepareUpload(event)
{
    files = event.target.files;
    getBase64(files[0]);
}

function uploadAvatar(){
    event.stopPropagation(); // Stop stuff happening
    event.preventDefault(); // Totally stop stuff happening
    //files = event.target.files;
    // START A LOADING SPINNER HERE
    console.log(files);
    // Create a formdata object and add the files
    var data = new FormData();
    $.each(files, function(key, value)
    {
        data.append(key, value);
    });
    console.log(data);

    var parametersList = [['task','upload'],['data',data]];
    var requestParameters = {
        requestType:'upload',
        inputList:parametersList
    };

    //ControllerInterfaceObj.setRequestParameters(requestParameters);
    //ControllerInterfaceObj.executeRequest();



/*

    $.ajax({
        url: 'http://172.17.10.108:8081/online-school/rest/upload?type=logo',
        type: 'POST',
        data: data,
        cache: false,
        dataType: 'jsonp',
        processData: false, // Don't process the files
        contentType: false, // Set content type to false as jQuery will tell the server its a query string request
        success: function(data, textStatus, jqXHR)
        {
            if(typeof data.error === 'undefined')
            {
                // Success so call function to process the form
                alert('successfully uploaded');
            }
            else
            {
                // Handle errors here
                console.log('ERRORS: ' + data.error);
            }
        },
        error: function(jqXHR, textStatus, errorThrown)
        {
            // Handle errors here
            console.log('ERRORS: ' + textStatus);
            // STOP LOADING SPINNER
        }
    });
*/
}

function getBase64(file) {
    var reader64 = new FileReader();
    reader64.readAsDataURL(file);
    reader64.onload = function () {
        $('div.course-image-container img#course-img').attr('src',reader64.result);
    };
    reader64.onerror = function (error) {
        console.log('error');
    };
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