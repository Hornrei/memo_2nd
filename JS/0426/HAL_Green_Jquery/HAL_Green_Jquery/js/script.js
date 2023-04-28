// オブジェクトの作成
const $logo = $("#logo_min");
const $screen = $("#screen");

$logo.delay(1000).animate({"top":"50px","opacity":"0"},300,function(){
    $logo.hide();
});

$screen.delay(1300).animate({"height":"0px"},300,function(){
    $screen.hide();
})