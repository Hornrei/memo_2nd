// 自分のAPIKeyをもってくる
const apiKey = "114c1d0ef4c1e9135ea443dc5d39acea"

//東京の天気情報を取得するためのAPIエンドポイント
//lat(緯度)lon(経度)metric()
//参照：https://openweathermap.org/api/one-call-3
const apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=35.6905&lon=139.6995&lang=ja&units=metric&appid=${apiKey}`;

// HTTPリクエストを送信
fetch(apiUrl)

//.then():非同期操作の成功時に実行されるコードブロックを定義する
//HTTPリクエストから受け取ったレスポンスデータをJSON形式からJavaScriptオブジェクトに変換
.then(response => response.json())

//data:非同期操作から返されたデータが格納される
.then(data => {

    // 天気情報をコンソールに表示
    console.log(data);

    //現在の天気を表示
    const weather = data.weather[0].main;
    console.log(weather);
    document.querySelector("#weather").textContent = weather;

    //アイコン画像のURLを作成
    const iconId = data.weather[0].icon;
    console.log(iconId);
    const iconUrl = `https://openweathermap.org/img/wn/${iconId}@2x.png`;

    //アイコン画像を表示
    const iconImg = document.createElement("img");
    iconImg.src = iconUrl;
    document.querySelector("#weatherIcon").appendChild(iconImg);

    //気温をhtmlに表示
    const temperature = Math.round(data.main.temp);    //今の気温
    document.querySelector("#temperature").textContent = temperature;

    //max,min気温をhtmlに表示
    const maxTemperature = Math.round(data.main.temp_max);    //最高気温
    const minTemperature = Math.round(data.main.temp_min);    //最低気温
    document.querySelector("#temperatureMax").textContent = maxTemperature;
    document.querySelector("#temperatureMin").textContent = minTemperature;



})
.catch(error => {
    console.error('エラー:', error);
});
