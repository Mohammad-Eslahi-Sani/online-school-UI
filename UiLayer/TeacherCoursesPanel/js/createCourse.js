function createCourse(){
    var nameInput = $('input#new-course-name').val();
    var fieldInput = $('select#new-course-field option:selected').val();
    var createDate = $.now();
    var weekCount = 0;
    var grade = $('select#new-course-grade option:selected').val();


    var parametersList = [['task','createCourse'],['name',nameInput],['field',passwordInput],
    ['createDate',createDate],['weekCount',weekCount],['grade',grade]];

    var requestParameters = {
        requestType:'createCourse',
        inputList:parametersList
    };

    ControllerInterfaceObj.setRequestParameters(requestParameters);
    ControllerInterfaceObj.executeRequest();
}

$(document).ready(function() {
    $("input#create-course-confirm").on('click',createCourse);

    var myWindow = $("#createCourse"),
        undo = $("#new-course-popup");

    undo.click(function() {
        myWindow.data("kendoWindow").center().open();
//            undo.fadeOut();
    });

    function onClose() {
//            undo.fadeIn();
    }

    myWindow.kendoWindow({
        width: "300px",
        title: "ایجاد درس",
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

