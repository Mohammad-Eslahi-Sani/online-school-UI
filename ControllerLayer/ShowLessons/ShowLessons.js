/**
 * Created by Mohammad on 12/23/2016.
 * Getting a list of lessons for MainPage
 */

function ShowLessons(inputFields){
    this.fields = inputFields;
}

ShowLessons.prototype.getSuccessResponse = function(response){
    console.log('successful response from show lessons request sent to server:');
    console.log(response);

    var lessonsListLength = response.length;
    var showLessonsDiv = $('div.lessons-container div#ShowLessonsDiv');
    var allElements = '';
    var currentElement = '';
    var serverAdd =$.cookie('serverAddress'); 

    for(var i=0;i<lessonsListLength;i++){
        if(!response[i]['description']){
            response[i]['description']='blahblah';
        }
        response[i]["imgUrl"] = "../../UiLayer/OriginPage/splashTemplateResources/images/img_1.jpg";
        currentElement = '<div id="lesson' +
            response[i]['id'] +
            '" class="col-lg-4 col-md-4 col-sm-6 lesson-div">' +
            '<a href="../../UiLayer/CourseDescription/CourseDescription.html?lessonId='+
            response[i]['id']+
            '" class="fh5co-project-item image-popup goToDescriptionPage">' +
            '<figure max-width="200" max-height="200" ><div class="overlay"><i class="ti-plus"></i></div><img src="' +
            serverAdd+response[i]['imagePath'] +
            '" alt="Image" class="img-responsive">' +
            '</figure><div class="fh5co-text"><h2>' +
            response[i]['name'] +
            '</h2><p>' +
            response[i]['description'] +
            '</p></div></a>' +
            '</div>';
        allElements += currentElement;
        currentElement = '';
    }
    $('a.goToDescriptionPage').on('click',goToDescriptionPage);

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