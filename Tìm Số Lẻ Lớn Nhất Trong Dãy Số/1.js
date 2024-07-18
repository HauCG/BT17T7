const numbers = [-5, -2, 0, 1, 2, 4, 7];

function maxAmLe(arr) {
    let max = null;  // Khởi tạo max là null để lưu trữ số âm lẻ lớn nhất
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] < 0 && arr[i] % 2 !== 0 && (max === null || arr[i] > max)) {
            max = arr[i];  // nếu gặp số âm lẻ lớn hơn gán lại max
        }
    }
    return max;
    // Trả về số âm lẻ lớn nhất trong mảng
}

const amLeMax = maxAmLe(numbers);

if (amLeMax !== null) {
    document.write(`<p>Số âm lẻ lớn nhất là: ${amLeMax}</p>`);
} else {
    document.write("<p>Không có số âm lẻ nào trong dãy số.</p>");
}