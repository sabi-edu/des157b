(function(){
    'use strict';
    console.log('reading js');

    // -- DECLARATIONS --

    Parse.initialize(" a6pzQPpxFzS7IapoZ5Rvv58hhxkKukjU5joOpeW9", "K18tL22stikioAUdbpnviSH02S2FYeVWwKig28NX"); //PASTE HERE YOUR Back4App APPLICATION ID AND YOUR JavaScript KEY
    Parse.serverURL = "https://parseapi.back4app.com/";

    const granimInstance = new Granim({
        element: '#granim-canvas',
        name: 'granim',
        opacity: [1, 1],
        states : {
            "default-state": {
                gradients: [
                    ['#DCD9FF', '#E6D9FE'],
                    ['#F3DAFE', '#FDDAFD']
                ]
            }
        }
    });

    const prompt = document.querySelector('#prompt');
    const form = document.querySelector('form');
    const input = document.querySelector('#input')
    const submitBtn = document.querySelector('#submit')
    const responseArea = document.querySelector('#response-area');


    // -- FUNCTIONS --

    submitBtn.addEventListener('click', function(event) {
        event.preventDefault();
        var value = input.value;
        localStorage.setItem('userResponse', value);
        pageSwitch();
        responseArea.textContent = localStorage.getItem('userResponse');
    });

    function pageSwitch () {
        prompt.remove();
        form.remove();
        $('#granim-canvas').removeClass('hidden').addClass('showing');
        $('main').removeClass('hidden').addClass('showing');
        $('#flower').removeClass('hidden').addClass('showing');
    }

    $(function() {
        $("#draggable").draggable();
    } );

})();