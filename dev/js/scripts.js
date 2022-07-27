
    
// import {skillsTrigger,galleryAni} from "./scrollAnimation.js";
import {burgerTL} from "./burgerAnimation.js";
import {menuAnimation} from "./mobileMenu.js"
// import {scrollPage} from "./pageScroll"
import { displayWindowSize } from "./mobileResizing"


let burgerClicked = false;
let burgerButton = document.querySelector("#burger");

burgerButton.addEventListener("click", openCloseMenu);

// console.log(navButtons);
function openCloseMenu() {
    if (burgerClicked === false) {
        burgerTL.play();
        menuAnimation.play();
        burgerClicked = true;
    } else {
        burgerTL.reverse();
        menuAnimation.reverse();
        burgerClicked = false;
    }
}
//listen to window resize for the menu being down and if it is force it back up
window.addEventListener("resize", function(){
    if(burgerClicked === true){
        // console.log("fire");
        openCloseMenu();
    }
});

//listen to window resize
window.addEventListener("resize", displayWindowSize);

//check the window size on load
window.addEventListener('load', displayWindowSize); 


// $("#clipboard-btn").on("click", function () {
var clipBtn = document.querySelector("#clipboard-btn");
clipBtn.addEventListener("click",copyFunc);

function copyFunc(){
    var copyTextarea = document.querySelector('.js-email');
    copyTextarea.focus();
    copyTextarea.select();

    try {
        var successful = document.execCommand('copy');
        var msg = successful ? 'successful' : 'unsuccessful';
        console.log('Copying text command was ' + msg);
    } catch (err) {
        console.log('Oops, unable to copy');
    }
}