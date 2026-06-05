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
    

    // 2 fields

    
    // Creating objects
    (async () => {
        const myNewObject = new Parse.Object('Entry');
        myNewObject.set('message', 'A string');
        
        try {
            const result = await myNewObject.save();
            // Access the Parse Object attributes using the .GET method
            console.log('Entry created', result);
        } catch (error) {
            console.error('Error while creating Entry: ', error);
        }
    })();


    // Reading objects
    (async () => {
        const Entry = Parse.Object.extend('Entry');
        const query = new Parse.Query(Entry);

        try {
            const results = await query.find();
            for (const object of results) {
            // Access the Parse Object attributes using the .GET method
            const message = object.get('message')
            console.log(message);
            }
        } catch (error) {
            console.error('Error while fetching Entry', error);
        }
    })();


    // Updating objects
    (async () => {
        const query = new Parse.Query(Entry);
        
        try {
            // here you put the objectId that you want to update
            const object = await query.get('xKue915KBG');
            object.set('message', 'A string');
            
            try {
            const response = await object.save();
            // You can use the "get" method to get the value of an attribute
            // Ex: response.get("<ATTRIBUTE_NAME>")
            // Access the Parse Object attributes using the .GET method
            console.log(response.get('message'));
            console.log('Entry updated', response);
            } catch (error) {
            console.error('Error while updating Entry', error);
            }
            } catch (error) {
            console.error('Error while retrieving object Entry', error);
        }
    })();


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
        pageSwitch();
    });

    function pageSwitch () {
        form.remove();
        $('#prompt').addClass('hidden');
        $('#granim-canvas').removeClass('hidden').addClass('showing');
        $('main').removeClass('hidden').addClass('showing');
        $('#flower').removeClass('hidden').addClass('showing');
    }

})();