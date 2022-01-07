var imgArray = new Array(4);
var slideIndex = 0;
var cyclingIndex = 0;
var randomIndex = 0;

var tigerArray = ["img/tigers/tiger-1.jpg", "img/tigers/tiger-2.jpg", "img/tigers/tiger-2.jpg", "img/tigers/tiger-4.jpg"];

function cycle() {

    //Change the 'src' of the 'img' element of the 'cyclingBanner'
    //every 2 secconds (2000ms); the images are picked up from the
    //imgArray sequentially.

    if (cyclingIndex > 3) {
        cyclingIndex = 0;

        document.getElementById('cyclingBanner').src = tigerArray[cyclingIndex];
        cyclingIndex++;
    }


    setTimeout("cycle()", 2000);

}

// cycle();


function random() {
    //TODO: 
    //Change the 'src' of the 'img' element of the 'randomBanner'
    //every 2 secconds (2000ms); the images are picked up from the
    //imgArray RANDOMLY.



    setTimeout("random()", 2000);

}


function doBack() {
    //select the previous image from the imgArray for the slide show;
    //if the current position is at the beginning, move to the end.
    if (slideIndex <= 0)
        slideIndex = 3;
    else
        slideIndex--;

    document.getElementById('slideShow').src = imgArray[slideIndex];

}

function doNext() {
    //select the next image from the imgArray for the slide show;
    //if the current position is at the end, move to the beginning.

    if (slideIndex >= 3)
        slideIndex = 0;
    else
        slideIndex++;

    document.getElementById('slideShow').src = imgArray[slideIndex];


}

function startup() {

    //assign images to the image array.
    //FEEL FREE TO USE YOUR OWN PICTURES

    // imgArray[0] = "lions.gif";

    // imgArray[1] = "tigers.gif";

    // imgArray[2] = "bears.gif";

    // imgArray[3] = "ohmy.gif";

    cycle();
    // random();

}