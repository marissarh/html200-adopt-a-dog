/*Reference the form building exercise in the slides as a guide for 
how this might work.

On the form page, display an alert that says "Thank you. The form 
information has been received" when the form has been submitted.
Console log the values inside the form, you can build a string or build an object.*/

//element.innerHTML = `<h1>ADOPTADOG</h1>`,
//element.innerHTML = `<h2>Seattle's premiere dog adoption agency </h2>`


const userInfo = [
    {
        name: 'full-name',
        label: 'Full Name'
    },
    {
        name: 'email-address',
        label: 'Email Address'
    },
    {
        name: 'phone-number',
        label: 'Phone Number'
    },
]


const form = document.createElement('form');
document.body.appendChild(form);

const label = document.createElement('label');
const input = document.createElement('input');

form.appendChild(label);
form.appendChild(input);

const submitButton = document.createElement('button');
submitButton.setAttribute('type','submit');
submitButton.textContent = 'Submit';

form.appendChild(submitButton);
form.addEventListener('submit', function(event){
    event.preventDefault();
    alert('Thank you. The form information has been received');
})

console.log(alert);