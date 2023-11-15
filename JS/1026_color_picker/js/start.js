var timeLeft = 0;
  var countdown = document.getElementById("countdown");

  function updateCountdown() {
    var seconds = (timeLeft / 100).toFixed(2);
    countdown.textContent = seconds;
    timeLeft--;

    if (timeLeft < 0) {
      clearInterval(timer);
      countdown.textContent = "0.00";
      // カウントダウンが終了したら新しいページに遷移する
      window.location.href = "file:///C:/develop/hal/2nd/memo1/JS/1026_color_picker/index.html"; // ここに新しいページのURLを設定
    }
  }

  var timer;

  var startButton = document.getElementById("start");

  startButton.addEventListener("click", function () {
    var firstDiv = document.querySelector(".first");
    var ichiranDiv = document.querySelector(".ichiran");

    firstDiv.style.display = "none";
    ichiranDiv.style.display = "block";

    // カウントダウンを開始する
    timeLeft = 1500;
    timer = setInterval(updateCountdown, 10);
  });


  const color = document.querySelector('#colorPicker')

  // カラーピッカーを操作した時の一連動作
  const colorBg = () => {
      // 選択した色を背景色に指定
      document.body.style.backgroundColor = color.value;

  }
  
  // カラーピッカーが変更されたらcolorBg1を発動させる
  color.addEventListener('input',colorBg);
  