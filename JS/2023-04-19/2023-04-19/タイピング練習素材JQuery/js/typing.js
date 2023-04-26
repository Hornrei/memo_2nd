// 問題文は配列に格納しておく
const text = ["古池や", "蛙飛び込む", "水の音"];

// 配列番号の初期化
let num = 0;


// オブジェクトを作成する
const $formObj = $(".myform");
const $questionText = $(".txt1");
const $answerText = $(".txt2");

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
        // 送信中止
        return false;
    }
});

