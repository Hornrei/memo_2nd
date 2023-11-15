const text = document.querySelector('#colorText')
const color = document.querySelector('#colorPicker')

// カラーピッカーを操作した時の一連動作
const colorBg = () => {
    // 選択した色を背景色に指定
    document.body.style.backgroundColor = color.value;
    // カラーコードを表示
    if(color.value ==='#ffffff'){
        text.textContent = 'カラーコード：' + color.value + '(white)';
    } else if(color.value === '#000000'){
        text.textContent = 'カラーコード：' + color.value + '(black)';
    } else{
        text.textContent = 'カラーコード：' + color.value;
    }
    console.log(document.querySelector('#colorPicker').value);
}

// カラーピッカーが変更されたらcolorBg1を発動させる
color.addEventListener('input',colorBg);

