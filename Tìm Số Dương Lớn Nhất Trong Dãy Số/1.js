const numbers = [-5, -2, 0, 1, 2, 4, 7];
function maxduong2(arr) {
    let max = 0;
    // Khởi tạo max là 0 để lưu trữ số nguyên dương lớn nhất
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > 0 && arr[i] % 2 === 0 && arr[i] > max) {
            max = arr[i];
            // nếu gặp số lớn hơn gán lại max
        }
    }
    return max;
    // Trả về số nguyên dương lớn nhất chia hết cho 2 trong mảng
}

const duongmax2 = maxduong2(numbers);
document.write(`<p>Số nguyên dương lớn nhất chia hết cho 2 trong dãy là: ${duongmax2}</p>`);