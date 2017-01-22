/**
 * Created by Mohammad on 1/22/2017.
 */

function UserCoursesListRequester(inputList){
    this.fields = inputList;
}

UserCoursesListRequester.prototype.requestUserCoursesList = function(){
    var requestAry = this.fields;

    var serverInterfaceObj = new ServerInterface();
    serverInterfaceObj.doRequest(requestAry,this.getSuccessResponse,this.getErrorResponse);
    console.log('request for user courses has been sent');
};

UserCoursesListRequester.prototype.getSuccessResponse = function(response){
    console.log('success response received for user courses list request');
    console.log(response);

    var coursesListUl = $('ul#panelbar ul#user-courses-container');
    var listLength = response.length;
    var currentElement = '';
    var totalElement = '';
    for(var i=0; i<listLength ; i++){
        currentElement = '<li id="course' +
            response[i]['courseId'] +
            '"><a>' +
            response[i]['courseTitle'] +
            '</a></li>';
        totalElement += currentElement;
    }

    $(totalElement).appendTo(coursesListUl);


    $("#panelbar").kendoPanelBar({
        expandMode: "single"
    });
};

UserCoursesListRequester.prototype.getErrorResponse = function(response) {
    console.log('Unable to send request for user courses list!');
    console.log(response);


};