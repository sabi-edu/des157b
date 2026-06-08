(function(){
    'use strict';
    console.log('reading js');

    Parse.initialize("1QKtkn4q7gLaOTJdxXdissUxzPOkC13MvZYHlQan", "bJyiDdLnA39prJznScm3eLr1fosjvSUxv1Q0frrD");
    Parse.serverURL = 'https://parseapi.back4app.com';

    // --- DECLARATIONS ---
    const overlay = document.querySelector('#overlay');
    const closeBtn = document.querySelector('#close-btn');
    const infoBtn = document.querySelector('#info-btn');
    const header = document.querySelector('header');
    const formFlower = document.querySelector('#form-flower')
    const form = document.querySelector('form');
    let user;
    let html = '';
    const mainTag = document.querySelector('main');
    const letterTag = document.querySelector('#letter');
    const backBtn = document.querySelector('#back-btn');
    const letterFlower1 = document.querySelector('#letter-flower1');
    const letterFlower2 = document.querySelector('#letter-flower2');
    const footer = document.querySelector('footer');
    


    // ------------------------------ FUNCTIONS


    // --- OVERLAY ---
    closeBtn.addEventListener('click', function(event){
        event.preventDefault();
        overlay.className = 'hidden';
    });

    document.addEventListener('keydown', function(event){
        if (event.key === 'Escape') {
            overlay.className = 'hidden';
        }
    });

    infoBtn.addEventListener('click', function(event){
        event.preventDefault();
        overlay.className = 'showing';
    });


    // --- FORM ---
    form.addEventListener('submit', function(event) {
        event.preventDefault();
        addRecord();
        formFlower.className = 'hidden';
        form.className = 'hidden';
        infoBtn.className = 'hidden';
        header.className = 'hidden';
        footer.className = 'hidden';
        mainTag.className = 'showing';
        letterFlower1.className = 'showing';
        letterFlower2.className = 'showing';
    })

    async function addRecord() {
        const emailData = document.querySelector('#email');
        const messageData = document.querySelector('#message');
        const newObject = new Parse.Object('Letters');
        
        user = emailData.value;
        console.log(user);
        newObject.set('email', emailData.value);
        newObject.set('message', messageData.value);
        try {
            const result = await newObject.save();
            emailData.value = '';
            messageData.value = '';
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
                console.log(results);
                const thisEmail = object.get('email');
                const thisMessage = object.get('message');
                html += `<p><em>${thisMessage}</em></p>`;
                console.log(`thisMessage is from ${thisEmail}`);
            }
            letterTag.innerHTML = html;
            console.log(html);
        } catch(error) {
            console.error('Error while fetching Letter', error);
        }
        letterTag.style.addClass = 'letter';
    } 


    // --- BACK BUTTON ---
    backBtn.addEventListener('click', function(event){
        location.reload();
    });

})();