(function(){
    'use strict';
    console.log('reading js');

    const fs = document.querySelector('.fa-expand');
    const mainP = document.querySelectorAll('main p');
    const thought0 = document.querySelector('#thought0');
    const thought1 = document.querySelector('#thought1');
    const thought2 = document.querySelector('#thought2');
    const thought3 = document.querySelector('#thought3');
    const thought4 = document.querySelector('#thought4');
    const thought5 = document.querySelector('#thought5');
    const pampaThought = [thought0, thought1, thought2, thought3, thought4, thought5];
    let counter = 0;

    fs.addEventListener('click', function(){
        if(!document.fullscreenElement){
            document.documentElement.requestFullscreen();
        } else {
            document.exitFullscreen();
        }
    });

    for(const eachP of mainP){
        eachP.addEventListener('click', function(){
            for( let i=0; i< pampaThought.length; i++){
                pampaThought[i].className = 'hidden';
            }
            pampaThought[counter].className = 'showing';
            if(counter == pampaThought.length){
                counter = 0;
            }
            else {
                counter++;
            }
        });
    }
})();