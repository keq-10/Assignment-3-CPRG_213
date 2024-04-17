/***
Author : Neeraj Bachwani
Version: 16th April 2024
Description : Java script added to contact page of delilah dog care 
***/

// when the "submit-button" is clicked, the contents of the contact-page are replaced with a single <p> element that reads "Thank you for your message" in size 24 font.


// hint: you can change the style of an element by modifying the value of that element's .style.fontSize, or by updating its .classList.

let submit_button = document.getElementById('submit-button');

function submit_click()
{
    let main = document.getElementById('contact-page');

    main.innerHTML = "Thank your for your message";
    main.style.fontSize ='x-large';

}
    
submit_button.addEventListener('click', submit_click);
