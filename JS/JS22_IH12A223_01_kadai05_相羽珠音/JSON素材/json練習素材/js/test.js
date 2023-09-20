//onload必要
$(function(){

//テスト1 階層のないJSONデータにアクセス
    // オブジェクトの作成
    const $ulTag = $("#test1");
    // JSONデータから文字列を取り出す
    const Name = Profile["name"];
    const Age = Profile["age"];
    const Job = Profile["job"];
    const Code = Profile["code"];

    // ulタグの中にliタグと一緒に文字列を書き込む
    $ulTag.append("<li>" + Name + "</li>");
    $ulTag.append("<li>" + Age + "歳</li>");
    $ulTag.append("<li>" + Job + "</li>");
    $ulTag.append("<li>" + Code + "</li>");
                            
//テスト2　パスタ（配列）にアクセス
    // オブジェクトの作成
    const $ulTag2 = $("#test2");
    // JSONデータから”パスタ”を取得
    const str = MENU["メニュー"][0]["お食事"][1]
    // 書き込み
    $ulTag2.append("<li>"+ str + "</li>");
    

//お食事メニュー読み込み
    // オブジェクト作成
    const $foodMenu = $("#foodmenu");
    const $foods = MENU["メニュー"][0]["お食事"]
    // ループ処理
    for(let i = 0;i<$foods.length; i++){
        $foodMenu.append("<li>" + $foods[i] + "</li>");
    }
    
//ドリンクメニュー読み込み
    const $drinkMenu = $("#drinkmenu");
    const $drinks = MENU["メニュー"][1]["ドリンク"];
    // ループ処理
    for(let i = 0;i<$drinks.length; i++){
        $drinkMenu.append("<li>" + $drinks[i] + "</li>");
    }
   
//ランチメニュー読み込み
    const $lunchMenu = $("#lunchmenu");
    const $lunch = MENU["メニュー"][2]["ランチ"];
    // ループ処理
    for(let i = 0;i<$lunch.length; i++){
        $lunchMenu.append("<li>" + $lunch[i] + "</li>");
    }




})
