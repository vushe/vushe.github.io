const dom = {
    form: document.querySelector('#contact-form'),
    question: document.querySelector('#question'),
    message: document.querySelector('#status'),
    answer: document.querySelector('#answer'),
};

const generateRandomNumbers = () => {
    const num1 = Math.floor(Math.random() * 10) + 1;
    const num2 = Math.floor(Math.random() * 10) + 1;

    dom.question.innerText = `${num1} + ${num2}`;
}

const displayMessage = (message, messageType) => {
    const htmlMessage = `
        <div class="alert alert-${messageType}" role="alert">
            ${message}
        </div>`;

    dom.message.innerHTML = htmlMessage;
    dom.answer.innerText = '';
}

dom.form.addEventListener('submit', event => {
    event.preventDefault();

    const answer = parseInt(document.querySelector('#answer').value);
    const equation = document.querySelector('#question').innerText;
    const [ num1, num2]  = equation.split(/[+]/);
    const sum = parseInt(num1) + parseInt(num2);

    if (answer === sum) {
        axios.post('https://formspree.io/mvovpynr', new FormData(dom.form))
            .then(res => {
                dom.form.reset();
                displayMessage('Thanks!', 'success');
            })
            .catch(err => displayMessage('Something went wrong when submitting form, please try again', 'warning'));
    } else if (answer !== '') {
        displayMessage('Number is incorrect. Please try again.', 'warning');
    }
});
