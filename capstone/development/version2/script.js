(function(){
    'use strict';
    console.log('reading js');

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

    const form = document.querySelector('form');
    const input = document.querySelector('#input')
    const submitBtn = document.querySelector('#submit')
    const responseArea = document.querySelector('#response-area');
    
    submitBtn.addEventListener('click', function(event) {
        event.preventDefault();
        var value = input.value;
        localStorage.setItem('userResponse', value);
        pageSwitch();
        responseArea.innerHTML += localStorage.getItem('userResponse');
    });

    function pageSwitch () {
        form.remove();
        $('#prompt').addClass('hidden');
        $('#granim-canvas').removeClass('hidden').addClass('showing');
        $('main').removeClass('hidden').addClass('showing');
        $('#flower').removeClass('hidden').addClass('showing');
    }

})();