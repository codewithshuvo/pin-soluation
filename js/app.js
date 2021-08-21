function getPin() {
    const pin = Math.round(Math.random() * 10000)
    const pinString = pin + "";
    if (pinString.length == 4) {
        return pin;
    }
    else {
        return getPin();
    }
}
function generatePin() {
    const pin = getPin()
    console.log(pin)
    document.getElementById('pin-code').value = pin
}
// this is the key pad part two 
document.getElementById('key-pad').addEventListener('click', function (event) {
    const number = (event.target.innerText)
    const callNumber = document.getElementById('tyep-key')
    if (isNaN(number)) {
        if (number == 'C') {
            callNumber.value = '';
        }

    }
    else {
        const previouNumer = callNumber.value;
        const newNumber = previouNumer + number;
        callNumber.value = newNumber;
    }
})

// this is thew verify part 
function verifyPin() {
    const pinDisplay = document.getElementById('pin-code').value
    const tyepCode = document.getElementById('tyep-key').value
    if (pinDisplay == tyepCode) {
        console.log('wow great work')
    }
    else {
        console.log('valo kore aber try koro')
    }
}