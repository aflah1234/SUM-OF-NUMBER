function calculateSum() {
    let number = document.getElementById('number').value;
    let result = document.getElementById('result');
    number = parseInt(number);

    if (isNaN(number) || number < 0 || number > 1000000) {
        result.textContent = "Invalid number";
    } else {
        let sum = (number * (number + 1)) / 2;
        result.textContent = `Sum of numbers up to ${number} is ${sum}`;
    }
}