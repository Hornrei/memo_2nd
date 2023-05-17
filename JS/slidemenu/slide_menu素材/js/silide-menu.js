//オブジェクト作成
const $btn = $(".btn");
const $centerLine = $(".line_icon");

//スライドメニューの幅（初期値）
let menuWidth = 250;


//イベントの設置
$btn.on("click",function(){
    //ハンバーガーメニュー
    $centerLine.toggleClass("closebtn");          //toggleclass...classをつけたり外したりする

    //スライドメニュー
    //bodyの子要素のmargin-leftを、スライドメニューの幅分増やす
    const $contents = $("body").children();     //bodyタグの中身のオブジェクト化
    $contents.animate({
        "margin-left":"+=" + menuWidth + "px"
    },250);

    //menuWidthに-1をかける
    menuWidth *= -1;

});

