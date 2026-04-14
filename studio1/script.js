const overlay = document.querySelector('#overlay');
const pampaImg = document.querySelector('#pampa-img');
const blurb = document.querySelector('#blurb');
const intervalID = setInterval(checkTime, 1000);

// videoTime 

(function(){
    'use strict';
    console.log('reading js');

    const fs = document.querySelector('.fa-expand')

    fs.addEventListener('click', function(){

        if(!document.fullscreenElement){
            document.documentElement.requestFullscreen();
        } else {
            document.exitFullscreen();
        }
    });

    function checkTime() {
        if(1 < myVideo.currentTime && myVideo.currentTime < 3) {
            blurb.className = 'showing';
        } else {
            blurb.className = 'hidden';
        }

        if(5 < myVideo.currentTime && myVideo.currentTime < 7) {
            pampaImg.className = 'showing';
        } else {
            pampaImg.className = 'hidden';
        }
    }
})();