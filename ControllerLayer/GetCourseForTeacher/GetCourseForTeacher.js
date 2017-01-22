/**
 * Created by Mohammad on 1/22/2017.
 */

function GetCourseForTeacher(inputList){
    this.fields = inputList;
}

GetCourseForTeacher.prototype.requestCourseForTeacher = function(){
    var requestAry = this.fields;

    var serverInterfaceObj = new ServerInterface();
    serverInterfaceObj.doRequest(requestAry,this.getSuccessResponse,this.getErrorResponse);
    console.log('request course info for teacher has been sent');
};

GetCourseForTeacher.prototype.getSuccessResponse = function(response){
    console.log('success response received for teacher course info request');
    console.log(response);

    $('div#left-section div.image-div img#course-img').attr('src',response['bigImgUrl']);
    $('div#left-section div.course-title-container input#course-title:text').val(response['courseTitle']);
    $('div#left-section div.course-shortDescription-container textarea#course-shortDescription')[0].innerHTML
        = response['courseShortDescription'];
    $('div#left-section div.course-longDescription-container textarea#course-longDescription')[0].innerHTML
        = response['courseLongDescription'];

    $('div#left-section div.cost-row input#course-cost').val(response['courseCost']);
    $('div#left-section div.level-row select#course-level').val(response['courseLevel']);



    var sessionsList = response['sessionsList'];
    var sessionsListLength = sessionsList.length;
    var currentElement = '';
    var totalElement = '';
    var fileList = [];
    var fileListLength = 0;
    for(var i=0; i<sessionsListLength ; i++){
        currentElement =
            '<div id="session' +
            sessionsList[i]['sessionNumber'] +
            '" class="row session-div">' +
            '<div class="row session-number"><h4>' +
            '‘„«—Â Ã·”Â:' +
            '<span id="session-number">' +
            sessionsList[i]['sessionNumber'] +
            '</span></h4></div><div class="row"><h4><label for="session-description">' +
            '  Ê÷?Õ Ã·”Â' +
            '</label></h4></div><div class="row"><textarea class="k-rtl" id="session-description" cols="125" rows="3">' +
            sessionsList[i]['sessionText'] +
            '</textarea></div><div class="row"><button id="session-description-edit" type="button" class="col-md-2 k-button">' +
            '«⁄„«·  €??—« ' +
            '</button></div><div class="row file-list">';

        fileList = sessionsList[i]['sessionFilesList'];
        fileListLength = fileList.length;
        for(var j=0; j<fileListLength;j++){
            currentElement+=
                '<div id="file-' +
                fileList[j]['fileId'] +
                '" class="file-container"><a class="file-link" href="' +
                fileList[j]['fileUrl']+
                '">' +
                fileList[j]['fileName'] +
                '</a><span class="remove-file glyphicon glyphicon-remove"></span></div>';

        }
        currentElement +=
            '</div>' +
            '<div class="row upload-file"><button id="upload-session-file" type="button" class="k-button">' +
            '«÷«›Â ò—œ‰ ›«?· Ãœ?œ' +
            '</button></div></div>';

        totalElement += currentElement;
    }

    $(totalElement).appendTo($('div#left-section'));
};

GetCourseForTeacher.prototype.getErrorResponse = function(response) {
    console.log('Unable to send request of teacher course info!');
    console.log(response);


};