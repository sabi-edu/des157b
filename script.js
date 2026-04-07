(function(){
    'use strict';
    console.log('reading js');

    const switchBtn = document.querySelector('button');
    const aTag = document.querySelectorAll('a');

    lightToDark();

    function lightToDark() {
        switchBtn.addEventListener('click', function(event){
        document.querySelector('body').style.backgroundColor = '#1558A8';
        document.querySelector('h1').style.color = '#D8F2FF';
        document.querySelector('#name').style.color = '#D8F2FF';
        document.querySelector('p').style.color = '#D8F2FF';
        document.querySelector('button').style.backgroundColor = '#98DBFE';

        switchBtn.removeEventListener('click', event);
        darkToLight();
        });
    }

    function darkToLight() {
        switchBtn.addEventListener('click', function(event){
        document.querySelector('body').style.backgroundColor = '#D8F2FF';
        document.querySelector('h1').style.color = '#1558A8';
        document.querySelector('#name').style.color = '#1558A8';
        document.querySelector('p').style.color = '#1558A8';
        document.querySelector('button').style.backgroundColor = '#D8F2FF';

        switchBtn.removeEventListener('click', event);
        lightToDark();
        });
    }

})();