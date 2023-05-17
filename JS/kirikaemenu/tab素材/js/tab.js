//このコードのポイント！
// aタグのhref属性の属性値と、divタグのid名を同じ名前にしておくところ

//オブジェクトの作成
const $tab = $(".tab-link");
const $tabContents = $(".text-contents");

//1個目以外のdivコンテンツは非表示にしておく
$(".text-contents:not('#tab1')").hide();

//イベントの設定
$tab.on("click",function(){

   //タブをクリックするたびに「カレントタブ」 オブジェクトが作成される
   const $currentTab = $(".current");

   //一度、すべてのdivタグを非表示にする
    $tabContents.hide();

    //aタグのhrefの属性値を取得して、変数に格納する
    const idName = $(this).attr("href");                  //attr -> 属性値取得

    //そのid名のdivのみ表示
    $(idName).show();

    //現在のcurrentクラスを削除
    $currentTab.removeClass("current");

    //クリックされたタブにcurrentクラスを追加
    $(this).addClass("current");

    //リンクを無効に
    return false;


});

