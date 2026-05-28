(function(){
    'use strict';
    console.log('reading js');

    Parse.initialize("1QKtkn4q7gLaOTJdxXdissUxzPOkC13MvZYHlQan", "bJyiDdLnA39prJznScm3eLr1fosjvSUxv1Q0frrD");
    Parse.serverURL = 'https://parseapi.back4app.com';

    const overlay = document.querySelector('#overlay')
    const closeBtn = document.querySelector('#close-btn')
    const form = document.querySelector('form');
    const input = document.querySelector('#input')
    const submitBtn = document.querySelector('#submit')
    const msg = document.querySelector('#message');


    closeBtn.addEventListener('click', function(event){
        event.preventDefault();
        overlay.className = 'hidden';
    });

    document.addEventListener('keydown', function(event){
        if (event.key === 'Escape') {
            overlay.className = 'hidden';
        }
    });



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