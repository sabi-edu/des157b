(function(){
    'use strict';
    console.log('reading js');

    const form = document.querySelector('form');
    const input = document.querySelector('#input')
    const submitBtn = document.querySelector('#submit')
    const msg = document.querySelector('#message');


    submitBtn.addEventListener('click', function(event) {
        event.preventDefault();
        var value = input.value;
        localStorage.setItem('userResponse', value);
        pageSwitch();
        msg.innerHTML += localStorage.getItem('userResponse');
    });

    function pageSwitch () {
        form.remove();
        $('#prompt').addClass('hidden');
        $('#granim-canvas').removeClass('hidden').addClass('showing');
        $('main').removeClass('hidden').addClass('showing');
        $('#flower').removeClass('hidden').addClass('showing');
    }

})();