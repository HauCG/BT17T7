function isPrime(num) {
    // Kiểm tra nếu số nhỏ hơn 2
    if (num < 2) return false;

    // Kiểm tra các số từ 2 đến căn bậc hai của num
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) {
            return false;
        }
    }
    return true;
}

function checkPrime() {
    let inputNumber = document.getElementById("numberInput").value.trim();
    let number = parseInt(inputNumber);


    if (number < 2) {
            alert("Nhập số >= 2!");
    } else if (isPrime(number)) {
        alert(number + " là số nguyên tố!");
    } else {
        alert(number + " không phải số nguyên tố!");
    }
}