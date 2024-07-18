    const numbers = [-15, 2, -12, 9, -9, 7, -1, -8, -5, 5, -3];

    function checkam(num) {
    return num < 0;
}

    const demam = numbers.filter(checkam).length;

    document.write(`<p>Số số âm trong dãy số là: ${demam}</p>`);
