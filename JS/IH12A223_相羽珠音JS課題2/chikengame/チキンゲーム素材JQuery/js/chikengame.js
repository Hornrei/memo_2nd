// オブジェクトの作成
const $startBtn = $(".btn");
const $resetBtn = $(".reset");
const $bike = $(".bike");
const $yeah = $(".yeah");
const $posBox = $(".run-num");
const $scoreBox = $(".score-num");

// あらかじめ遺影を非表示にしておく
$yeah.hide();

// 1.スタートボタン
let flg = 0;

$startBtn.on("click", function(){
    if(flg == 0){
        flg = 1;
        $startBtn.html("ストップ！");
        bikeStart(); //バイクスタート
        xPosBike();
    }else{
        flg = 0;
        $startBtn.html("スタート");
        bikeStop();
        addScore();
    }
})

// バイクスタート関数の作成
function bikeStart(){
    $bike.animate({"left":"1001px"},1000, "swing", function(){
        $bike.css("opacity","0.2");
        $startBtn.css("pointer-events","none");
        $startBtn.html("押せません！");
        $yeah.fadeIn();
        
    });
}

// バイクストップ関数の作成
function bikeStop(){
    // animateをとめる
    $bike.stop();
    // 2回以上スタートできないように、aタグにマウスが反応しないようにする
    $startBtn.css("pointer-events","none");
    $startBtn.html("押せません！")

}


// リアルタイム走行距離表示関数
let Timer;      //タイマー変数（ストップするために必要）
function xPosBike(){
    // バイクの位置(x,y軸)を取得する
    const currentPos = $bike.offset();
    //戻り値のx軸だけ取得
    const currentPosX = Math.floor(currentPos.left);    
    // 走行距離を表示
    $posBox.html(currentPosX);
    Timer = setTimeout("xPosBike()",1)
}



//得点加算関数
//得点の初期化
let score = 0;

function addScore(){
    //ストップボタンをクリックした瞬間のx軸の現在地取得
    const currentPosStop = $bike.offset();
    const currentPosXstop = Math.floor(currentPosStop.left);

    if(currentPosXstop == 1000){
        score += 1000000;
    }else if(currentPosXstop >= 980 && currentPosXstop < 1000){
        score += 1000;
    }else if(currentPosXstop >= 900 && currentPosXstop < 980){
        score += 10
    } else{
        score = 0;
    }

    //得点を表示
    $scoreBox.html(score);
}


//リセットボタンの実装
$resetBtn.on("click",function(){

    //バイクの位置を初期化
    $bike.css("left","0");
    //得点の初期化
    score = 0;
    //現在位置の初期化
    currentPosX = 0;
    //表示
    $scoreBox.html(score);
    $posBox.html(currentPosX);
    //スタートボタン有効
    $startBtn.css("pointer-events","auto");
    //ボタン表記リセット
    $startBtn.html("スタート");
    //遺影の消去
    $yeah.fadeOut();
    //バイクの透明度を元に戻す
    $bike.css("opacity","1");
    //セットタイムアウト解除（タイマー解除）
    clearTimeout(Timer);
    // flg変数に0代入しておく
    flg = 0;

})