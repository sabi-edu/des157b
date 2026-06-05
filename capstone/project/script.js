(function(){
    'use strict';
    console.log('reading js');

    Parse.initialize("1QKtkn4q7gLaOTJdxXdissUxzPOkC13MvZYHlQan", "bJyiDdLnA39prJznScm3eLr1fosjvSUxv1Q0frrD");
    Parse.serverURL = 'https://parseapi.back4app.com';

    const overlay = document.querySelector('#overlay')
    const closeBtn = document.querySelector('#close-btn')
    const myForm = document.querySelector('form');
    let user;
    let html = '';
    const submitBtn = document.querySelector('#submit-btn');
    const letters = document.querySelector('#letters');   
    
    
    closeBtn.addEventListener('click', function(event){
        event.preventDefault();
        overlay.className = 'hidden';
    });

    document.addEventListener('keydown', function(event){
        if (event.key === 'Escape') {
            overlay.className = 'hidden';
        }
    });


    myForm.addEventListener('submit', function(event) {
        event.preventDefault();

        addRecord();
        pageSwitch();
    })


    async function addRecord() {
        const emailData = document.querySelector('#email');
        const commentData = document.querySelector('#comments');
        const newObject = new Parse.Object('Letters');

        user = emailData.ariaValueMax;
        newObject.set('email', emailData.value);
        newObject.set('comment', commentData.value);
        
        try {
            const result = await newObject.save();
            emailData.value = '';
            commentData.value = '';
            getLetters();
        } catch(error) {
            console.error('Error while creating ParseObject: ', error);
        }
    }

    async function getLetters() {
        const query = new Parse.Query('Letters');
        query.equalTo('email', user);
        query.descending('createdAt');

        try {
            const results = await query.find();
            for (const object of results) {
                const thisEmail = object.get('email');
                const thisComment = object.get('comment');
                html += `<article><p>${thisComment} from ${thisEmail}</p></article>`;
            }
            letters.innerHTML = html;
        } catch(error) {
            console.error('Error while fetching Letters', error)
        }
    } 

    
    function pageSwitch () {
        myForm.remove();
        $('#prompt').addClass('hidden');
        $('#granim-canvas').removeClass('hidden').addClass('showing');
        $('main').removeClass('hidden').addClass('showing');
        $('#flower').removeClass('hidden').addClass('showing');
    }

})();