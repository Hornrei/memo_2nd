// 問題文は配列に格納しておく
const text=["人間失格","心中は一人ではできない","清く明るく元気な自殺","人は罪深く愚かだ","これより始まる怪奇譚","生きるなんて行為に何か価値があると本当に思っているの？"];

// 配列番号の初期化(ランダムにしてみました)
let num = Math.floor(Math.random()*(text.length - 1));
// 得点の初期化
let score = 0;

// オブジェクトを作成する
const $formObj = $(".myform");
const $questionText = $(".txt1");
const $answerText = $(".txt2");
const $score = $(".scorenum");

// 0点を表示
$score.html(score);




// 答え欄にカーソルを立てる
$answerText.focus();

// 問題文を表示する
$questionText.val(text[num]);

// 送信時の処理
$formObj.on("submit", function () {
    // 答え欄に入力されたテキストを出力して変数に格納する
    let getText = $answerText.val();
    // 同一の文章が入力されたときの処理
    if (getText == text[num]) {
        // 次の問題文を表示する
        num++;
        $questionText.val(text[num]);
        // 答え欄を空にする
        $answerText.val("");

        // 得点の加算
        score += 100;
        $score.html(score);

        // 最後の問題までいったらループ
        if(num > text.length - 1){
            num = 0;
            $questionText.val(text[num]);
        }

        // 送信中止
        return false;
    } else{
        $answerText.val("");
        score -= 10;
        $score.html(score);
        return false;
        
    }
});


