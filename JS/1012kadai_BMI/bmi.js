function calculateBMI() {
    var weight = parseFloat(document.getElementById("weight").value);
    var height = parseFloat(document.getElementById("height").value);

    if (weight && height && height > 0) {
        var bmi = weight / (height * height);
        var resultElement = document.getElementById("result");

        if (bmi < 16.00) {
            resultElement.textContent = "BMIは " + bmi.toFixed(2) + " です。 重度のやせ";
        } else if (bmi < 17.00) {
            resultElement.textContent = "BMIは " + bmi.toFixed(2) + " です。 中度のやせ";
        } else if (bmi < 18.50) {
            resultElement.textContent = "BMIは " + bmi.toFixed(2) + " です。 軽度のやせ";
        } else if (bmi < 25.00) {
            resultElement.textContent = "BMIは " + bmi.toFixed(2) + " です。 普通体重";
        } else if (bmi < 30.00) {
            resultElement.textContent = "BMIは " + bmi.toFixed(2) + " です。 前肥満";
        } else if (bmi < 35.00) {
            resultElement.textContent = "BMIは " + bmi.toFixed(2) + " です。 肥満（ちょいやばい）";
        } else if (bmi < 40.00) {
            resultElement.textContent = "BMIは " + bmi.toFixed(2) + " です。 肥満（やばい）";
        } else {
            resultElement.textContent = "BMIは " + bmi.toFixed(2) + " です。 肥満（だいぶやばい）";
        }
    } else {
        alert("正しい体重と身長を入力してください。");
    }
}

