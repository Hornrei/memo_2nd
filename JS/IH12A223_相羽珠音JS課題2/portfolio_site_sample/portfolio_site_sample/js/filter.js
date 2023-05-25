// オブジェクトの作成
const $menuliTag = $(".sidemenu1 li");
const $photoliTag = $(".works li");

// イベントの設定
$menuliTag.on("click",function(){
    // 1クリックされたメニュー(li)のclassを取得して変数に格納
    const className = $(this).attr("class");
    // 2一度すべての写真をフェードアウトさせる
    $photoliTag.each(function(){
        $(this).animate({"opacity":"0"},500);
        $(this).hide();
        // 3クリックされたliのclassメイト同じclass名がついた写真だけを表示する
        if($(this).hasClass(className)){
            $(this).animate({"opacity":"1.0"},500);
            $(this).show();
        }
    
    })
    return false;
});