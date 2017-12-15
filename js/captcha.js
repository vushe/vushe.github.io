function generateRandomNumbers() {

    var num1 = Math.floor(Math.random() * 10) + 1,
        num2 = Math.floor(Math.random() * 10) + 1;

    $("#question").text(num1 + ' + ' + num2);

}

function displayMessage(message, message_type) {

    var html_message='<div class="alert alert-' + message_type +
        '" role = "alert" >' +
        message + '</div>';


    $("#status").html(html_message);
    $("#answer").text("");
}

$("#contact-form").submit(function (event) {

    var answer = parseInt($("#answer").val()),
        equation = $("#question").text(),
        num_arr = equation.split(/[+]/),
        sum = parseInt(num_arr[0]) + parseInt(num_arr[1]);

    if (answer === sum) {
        displayMessage("Thanks!", 'success');
    } else if (answer !== "") {
        displayMessage("Number is incorrect. Please try again.", 'warning');
        defaultPrevented = true;
        event.preventDefault();
    }

})