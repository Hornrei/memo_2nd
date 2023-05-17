// divタグをオブジェクトにする
const $slideDiv = $(".slideshow");

// divタグの子要素(img)に対して1枚1枚処理をする
$slideDiv.each(function(){
    // フェード1回分の処理を関数にまとめる
    function fadeImg(){
        //imgタグ3つを変数に格納する
        let $slidePhotoImg = $slideDiv.find(".slideshow__photo");  //find()で.前の子要素を別々に取得
        //1枚目と2枚目のimgタグを取得して、変数に格納する
        let $firstImg=$slidePhotoImg.eq(0);
        let $secondImg=$slidePhotoImg.eq(1);
        //1枚目を一番後ろに移動してフェードアウト
        $firstImg.appendTo($slideDiv).fadeOut(3000);
        //2枚目の写真をフェードイン
        $secondImg.fadeIn(3000);
        
    }

    //3秒おきにfadeImg関数を呼び出す
    setInterval(fadeImg,3000);
});
