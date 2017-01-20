/**
 * Created by Mohammad on 12/23/2016.
 * Getting a list of lessons for MainPage
 */

function ShowLessons(inputFields){
    this.fields = inputFields;
}

ShowLessons.prototype.getSuccessResponse = function(response){
    alert('successful response from show lessons request sent to server:');
    console.log(response);

    var lessonsListLength = response.length;
    var showLessonsDiv = $('div.lessons-container div#ShowLessonsDiv');
    var allElements = '';
    var currentElement = '';

    for(var i=0;i<lessonsListLength;i++){
        if(!response[i]['lessonDescription']){
            response[i]['lessonDescription']='blahblah';
        }

        currentElement = '<div id="lesson' +
            response[i]['lessonId'] +
            '" class="col-lg-4 col-md-4 col-sm-6">' +
            '<a href="' +
            response[i]['imgUrl'] +
            '" class="fh5co-project-item image-popup">' +
            '<figure><div class="overlay"><i class="ti-plus"></i></div><img src="' +
            response[i]['imgUrl'] +
            '" alt="Image" class="img-responsive">' +
            '</figure><div class="fh5co-text"><h2>' +
            response[i]['lessonTitle'] +
            '</h2><p>' +
            response[i]['lessonDescription'] +
            '</p></div></a></div>';
        allElements += currentElement;
        currentElement = '';
    }

    $(allElements).appendTo(showLessonsDiv);
};

ShowLessons.prototype.getErrorResponse = function(response){
    alert('error in show lessons Request :');
    console.log(response);

    console.log('error parse:');
    console.log(JSON.parse(response));

};

ShowLessons.prototype.requestLessonsList = function(){
    var requestAry = this.fields;
    var serverInterfaceObj = new ServerInterface();
    serverInterfaceObj.doRequest(requestAry,this.getSuccessResponse,this.getErrorResponse);
    console.log('request for getting lessons list has been sent');
};