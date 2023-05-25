// スクロール途中でフェードインするトップページ
const $pagetopBtn = $("#totop");
// あらかじめボタンを消しておく
$pagetopBtn.hide();

// イベントの設定
$(window).on("scroll",function(){
    const scrollNum = $(window).scrollTop();
    if (scrollNum > 150) {
        $pagetopBtn.fadeIn();
    }else{
        $pagetopBtn.fadeOut();
    }
});

// スムーススクロール
$pagetopBtn.on("click",function(){
    $("html,body").animate({"scrollTop":"0"},500);
})



//スクロール途中でヘッダーが縮小する


//スクロールイベントの設定

const $logo = $(".logo");
const $nav = $(".gnav");
const $header = $("header");
$(window).on("scroll",function(){

    const scrollNum = $(window).scrollTop();
    if(scrollNum > 150){
        $header.addClass("small-header");
        $logo.addClass("small-logo");
        $nav.addClass("small-nav");
    }else{
        $header.removeClass("small-header")
        $logo.removeClass("small-logo");
        $nav.removeClass("small-nav");
    }
})




// $(window).on("scroll",function(){

//     // オブジェクトの準備
//     const $header = $("header");
//     const $logo = $(".logo");
//     const $nav = $(".gnav");
//     // スクロール距離を取得して変数に格納する
//     const scrollNum = $("window").scrollTop();
//     if(scrollNum > 150){
//         $header.addClass("small-header");
//         $logo.addClass("small-logo");
//         $nav.addClass("small-logo");
//     }else{
//         $header.removeClass("small-header")
//         $logo.removeClass("small-logo");
//         $nav.removeClass("small-logo");
//     }
// })