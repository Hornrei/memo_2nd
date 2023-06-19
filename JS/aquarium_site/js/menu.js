//オブジェクトの準備
const $btn = $(".btn");
const $centerLine = $(".line_icon");
const $blackScreen = $(".screen");

$blackScreen.hide();

$btn.on("click", function () {
  //三本線メニューのclass切り替え
  $centerLine.toggleClass("closebtn");
  //全画面メニューのclass切り替え
  $blackScreen.toggleClass("fadein");

  if ($blackScreen.hasClass("fadein")) {
    $blackScreen.stop().fadeIn(500);
  } else {
    $blackScreen.stop().fadeOut(500);
  }
})

// 黒スクリーンをクリックで全画面メニューをフェードアウト
// $blackScreen.on("click", function () {
//   $blackScreen.toggleClass("fadein");
//   $centerLine.toggleClass("closebtn");
//   $blackScreen.stop().fadeOut(500);
// })