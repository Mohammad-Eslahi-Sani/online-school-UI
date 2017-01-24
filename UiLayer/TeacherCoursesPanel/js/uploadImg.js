/**
 * Created by Mohammad on 1/23/2017.
 */

// Variable to store your files
var bigImg;
var reader64 = new FileReader();

// Add events
$(document).ready(function(){
    $('input[type=file]#bigImage-input').on('change', prepareUpload);
    $('div.image-edit-button button#bigImage-confirm').on('click',sendFile);
});

// Grab the files and set them to our variable
function prepareUpload(event)
{
    bigImg = event.target.files[0];
}

function sendFile(){
    event.stopPropagation(); // Stop stuff happening
    event.preventDefault(); // Totally stop stuff happening

    getBase64(bigImg);

}

function getBase64(file) {
    reader64.readAsDataURL(file);
    reader64.onload = function () {
        $('div.course-image-container img#course-img').attr('src',reader64.result);
    };
    reader64.onerror = function (error) {
        console.log('error');
    };
}