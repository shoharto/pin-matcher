function getPin() {
    const pin = Math.round(Math.random() * 10000);
    const pinString = pin + "";
    if (pinString.length == 4) {
        return pin;
    } else {
        //console.log('call again 3 digit pin', pin);
        return getPin();
    }
}

function generatePin() {
    const pin = getPin();
    document.getElementById("display-pin").value = pin;
    console.log(pin);
}

document.getElementById("key-pad").addEventListener("click", function (event) {
    const number = event.target.innerText;
    const calcInput = document.getElementById("typed-numbers");

    if (isNaN(number)) {
        if (number == "C") {
            calcInput.value = "";
        }
    } else {
        const previousNumber = calcInput.value;
        const newNumber = previousNumber + number;
        calcInput.value = newNumber;
    }
});

function verifyPin() {
    const pin = document.getElementById('display-pin').value;
    const typedNumbers = document.getElementById('typed-numbers').value;
    const successMesssage = document.getElementById('notify-success');
    const failError = document.getElementById('notify-fail');
    if (pin == typedNumbers) {
        successMesssage.style.display = 'block';
        failError.style.display = 'none';
    }
    else {
        failError.style.display = 'block';
        successMesssage.style.display = 'none';

    }
}
