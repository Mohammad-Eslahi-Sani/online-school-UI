/**
 * Created by Mohammad on 1/20/2017.
 *
 *
 *
 */

function CourseDescriptionRequestor(inputList){
    this.fields = inputList;
}

CourseDescriptionRequestor.prototype.requestCourseDescription = function(){
    var requestAry = this.fields;
    $.removeCookie('courseId',{path:'/'});
    var serverInterfaceObj = new ServerInterface();
    serverInterfaceObj.doRequest(requestAry,this.getSuccessResponse,this.getErrorResponse);
    console.log('request for course description has been sent');
};

CourseDescriptionRequestor.prototype.getSuccessResponse = function(response){
    console.log('success response received for course description request from server');
    //console.log(response);

    if(!!response['bigImgUrl']){
        $('div.course-info-container img#course-bigImage').attr("src",response['bigImgUrl']);
    }
    if(!!response['lessonTitle']){
        $('div.course-info-container h2#course-title')[0].innerHTML = response['lessonTitle'];
    }
    if(!!response['lessonLongDescription']){
        $('div.course-info-container p#course-description')[0].innerHTML = response['lessonLongDescription'];
    }
    if(!!response['teacherName']){
        $('div.course-info-container span#course-author')[0].innerHTML = response['teacherName'];
    }
    if(!!response['teacherAvatarUrl']){
        $('div.course-info-container img#author-image').attr("src",response['teacherAvatarUrl']);
    }
    if(!!response['sessionCounts']){
        $('div.course-info-container span#course-time')[0].innerHTML = response['sessionCounts'];
    }
    if(!!response['courseLevel']){
        var levelText = "„ Ê”ÿ";
        if(response['courseLevel']==1){
            levelText = "¬”«‰"
        }
        else if(response['courseLevel']==2){
            levelText = "„ Ê”ÿ"
        }
        else if(response['courseLevel']==3){
            levelText = "”Œ "
        }
        $('div.course-info-container span#course-level')[0].innerHTML = levelText;
    }
    if(!!response['courseCost']){
        $('div.course-info-container span#course-price')[0].innerHTML = response['courseCost'];
    }

};

CourseDescriptionRequestor.prototype.getErrorResponse = function(response) {
    alert('Unable to get description from server!');


    console.log('response unparsed for login request');
    console.log(response);
    console.log(response['sessionId']);


};