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

    if(!!response['imagePath']){
        $('div.course-info-container img#course-bigImage').attr("src",response['imagePath']);
    }
    if(!!response['name']){
        $('div.course-info-container h2#course-title')[0].innerHTML = response['name'];
    }
    if(!!response['description']){
        $('div.course-info-container p#course-description')[0].innerHTML = response['description'];
    }
    if(!!response['teacher']){
        $('div.course-info-container span#course-author')[0].innerHTML = response['teacher'];
    }
    if(!!response['teacherAvatarUrl']){
        $('div.course-info-container img#author-image').attr("src",response['teacherAvatarUrl']);
    }
    if(!!response['weekCount']){
        $('div.course-info-container span#course-time')[0].innerHTML = response['weekCount'];
    }
    if(!!response['grade']){
        var levelText = "آسان";
        if(response['courseLevel']==0){
            levelText = "کارشناسی"
        }
        else if(response['courseLevel']==1){
            levelText = "کارشناسی ارشد"
        }
        else if(response['courseLevel']==2){
            levelText = "دکتری"
        }
        $('div.course-info-container span#course-level')[0].innerHTML = levelText;
    }
    if(!!response['balance']){
        $('div.course-info-container span#course-price')[0].innerHTML = response['balance'];
    }

};

CourseDescriptionRequestor.prototype.getErrorResponse = function(response) {
    console.log('Unable to get description from server!');


    console.log('response unparsed for login request');
    console.log(response);
    console.log(response['sessionId']);


};