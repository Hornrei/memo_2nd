
var imageElement = document.getElementById("kuji");
var imageIndex = 1; // 現在の画像インデックス（初期値: 1）

function switchImage() {
    if (imageIndex === 1) {
        imageElement.src = "./image/kujira.png";
        imageElement.alt = "Image 2";
        imageIndex = 2;
    } else {
        imageElement.src = "./image/kujira1.png";
        imageElement.alt = "Image 1";
        imageIndex = 1;
    }
}

// 0.5秒ごとに画像を切り替える
setInterval(switchImage, 500);