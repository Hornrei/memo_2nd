// JSONPデータの形
// 関数呼び出しの形をしている
// 関数名(JSONデータ)
// function uranai(deta){

// }を記述すると、変数detaに全JSONデータが代入される


//占いデータの取得　変数dataに全データが格納されてオブジェクト化される
function uranai(data){
    
//テスト　p.testに2021/02/15牡羊座のラッキーアイテムを書き出す
//["2021/02/08"][0]は牡羊座のデータ全体
//["2021/02/08"][1]はの牡牛座のデータ全体
//["2021/02/08"][2]はの蟹座のデータ全体
//"horoscope"は配列名ではなくキー名だから番号は必要ない
const $pTag = $(".test")
const luckeyItem = data["horoscope"]["2023/09/06"][0]["item"];
$pTag.append(luckeyItem);



//今日の日付を表示する
var today = new Date();
var year=today.getFullYear();
var month=today.getMonth()+1;
var date=today.getDate();
var day=today.getDay();
var weekday=new Array("日", "月", "火", "水", "木", "金", "土");
if(month<=9){month="0"+month;}
if(date<=9){date="0"+date;}

$("p.date").html(year+"年"+month+"月"+date+"日"+"("+weekday[day]+")");

// JSONPデータの年月日までの配列名を変数に格納する
let uranai = data["horoscope"][year + "/" + month + "/" + date];

// 星座の数を調べる
let horoscopeNum = uranai.length;


//for文で1日あたりの占いデータの数（12星座分）だけ繰り返し処理する
for (let i = 0; i < horoscopeNum; i++){
    
    
    //データを書き込む場所としてタグを用意する
    //for文で12回ループして書き込みたいので変数に格納しておく
    //セレクタにHTMLタグを渡すと、その要素を内部で生成してくれる。参考ページ　

    // オブジェクトの作成
    const $wrap = $("#wrap");
    const $sectionTag = $("<section>",{"class":"wrap"});
    const $h2Tag = $("<h2>",{"class":"midashi"});
    const $pTag = $("<p>",{"class":"content"});
    const $ulTag = $("<ul>",{"class":"lucky"});
    const $liTag1 = $("<li>",{"class":"color"});
    const $liTag2 = $("<li>",{"class":"item"});

        

    //sectionタグをdiv#wrapに追加 
    $wrap.append($sectionTag);

    //h2にJSONデータ内の星座名を追加   
    $h2Tag.append(uranai[i]["sign"]);

    //p.contentにJSONデータ内の占いの内容を追加
    $pTag.append(uranai[i]["content"]);

    //li.colorにJSONデータ内のラッキーカラーの内容を追加
    $liTag1.append(uranai[i]["color"]);

    //li.itemにJSONデータ内のラッキーアイテムの内容を追加
    $liTag2.append(uranai[i]["item"]);
        


    //sectionタグにh2を追加
    $sectionTag.append($h2Tag);
    //sectionタグにp.contentを追加
    $sectionTag.append($pTag);
    //sectionタグにul.luckyを追加
    $sectionTag.append($ulTag);

    //ulタグにli.colorを追加
    $ulTag.append($liTag1);
    //ulタグにli.itemを追加
    $ulTag.append($liTag2);

}//for文ここまで



}

    

