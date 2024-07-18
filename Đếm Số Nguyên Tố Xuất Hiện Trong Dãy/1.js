const numbers = [1, 2, 3, 9, 5, 7, 6, 3, 5, 11, 8];

function isPrime(num) {
    if (num <= 1) return false;
    for (let i = 2; i < num; i++) {
        if (num % i === 0) return false;
    }
    return true;
}

const primeCount = numbers.filter(isPrime).length;

document.write(`<p>Số lượng số nguyên tố trong dãy số là: ${primeCount}</p>`);