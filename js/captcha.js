function generateRandomNumbers() {

    var rand_num1 = Math.floor(Math.random() * 10) + 1,
        rand_num2 = Math.floor(Math.random() * 10) + 1;

    $("#question").text(rand_num1 + ' + ' + rand_num2);

}

function displayMessage(message) {
    $("#status").text(message);
    $("#answer").text("");
}

$("#contact-form").submit(function (event) {

    var answer = parseInt($("#answer").val()),
        equation = $("#question").text(),
        num_arr = equation.split(/[+]/),
        sum = parseInt(num_arr[0]) + parseInt(num_arr[1]),
        defaultPrevented = false;

    if (answer === sum) {
        displayMessage("Safe to submit the form");
        if (defaultPrevented) {
            $(this).unbind('submit').submit();
        }
    } else if (answer !== "") {
        displayMessage("Number is incorrect. Please try again.");
        defaultPrevented = true;
        event.preventDefault();
    }

})