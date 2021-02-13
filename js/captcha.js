'use strict';

const captchaDom = {
    body: document.querySelector('body'),
    form: document.querySelector('#contact-form'),
    question: document.querySelector('#question'),
    message: document.querySelector('#status'),
    answer: document.querySelector('#answer'),
};

const config = {
    messageTimeout: 5000, // In ms
};

const generateRandomNumbers = () => {
    const num1 = Math.floor(Math.random() * 10) + 1;
    const num2 = Math.floor(Math.random() * 10) + 1;

    captchaDom.question.innerText = `${num1} + ${num2}`;
}

const displayMessage = (message, messageType, disableTimeout = false) => {
    const htmlMessage = `
        <div class="alert alert-${messageType}" role="alert">
            ${message}
        </div>`;

    if (captchaDom.answer) {
        captchaDom.answer.innerText = '';
    }

    if (captchaDom.message) {
        captchaDom.message.innerHTML = htmlMessage;

        if (!disableTimeout) {
            setTimeout(() => {
                captchaDom.message.innerHTML = '';
            }, config.messageTimeout);
        }
    }

}

if (captchaDom.form && captchaDom.answer && captchaDom.question) {
    captchaDom.form.addEventListener('submit', event => {
        event.preventDefault();

        const answer = parseInt(captchaDom.answer.value);
        const equation = captchaDom.question.innerText;
        const [ num1, num2 ]  = equation.split(/[+]/);
        const sum = parseInt(num1) + parseInt(num2);

        if (answer === sum) {
            displayMessage('Sending...', 'info', true);

            axios.post('https://formspree.io/mvovpynr', new FormData(captchaDom.form))
                .then(res => {
                    captchaDom.form.reset();
                    displayMessage('Thanks!', 'success');
                })
                .catch(err => {
                    displayMessage('Something went wrong when submitting form, please try again', 'warning');
                })
                .finally(() => generateRandomNumbers());
        } else if (answer !== '') {
            displayMessage('Answer is incorrect. Please try again.', 'warning');
            generateRandomNumbers();
        }
    });

    captchaDom.form.addEventListener('keydown', event => {
        captchaDom.message.innerHTML = '';
    })
}

if (captchaDom.body && captchaDom.form) {
    captchaDom.body.addEventListener('load', generateRandomNumbers(), { once: true });
}
