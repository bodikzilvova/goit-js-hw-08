import throttle from 'lodash.throttle';


const feedbackForm = document.querySelector('.feedback-form');
const emailForm = document.querySelector('input[name="email"]');
const messageForm = document.querySelector('textarea[name="message"]');
const btnSubmit = document.querySelector('button[type="submit"]');

feedbackForm.addEventListener("input", throttle(setStorage, 500));


btnSubmit.addEventListener("click", () => {
    event.preventDefault();

    const currentData = {
        email: emailForm.value,
        message: messageForm.value
    };
    console.log(currentData);
   
    localStorage.removeItem("feedback-form-state");

    emailForm.value = "";
    messageForm.value = "";
});

const valueStorage = localStorage.getItem("feedback-form-state");
if(valueStorage !== null && valueStorage !== undefined){

    const savedStoraged = JSON.parse(valueStorage);

emailForm.value = savedStoraged.email;
messageForm.value = savedStoraged.message;
}

function setStorage(event) {
    event.preventDefault();

    const storage = {
        email: emailForm.value,
        message: messageForm.value,
    };

    localStorage.setItem("feedback-form-state", JSON.stringify(storage));
};



