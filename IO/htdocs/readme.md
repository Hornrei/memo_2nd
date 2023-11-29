## IO31 課題６ CSVファイルからグラフ表示
---
### `Step 0`
Python3のライブラリ「matplotlib」をインストールする。

### `Step 1`
取得した zip ファイルを [htdocs] など任意のディレクトリを作成して、そこで解凍する。

### `Step 2`
ターミナル、またはPowerShellなどから、以下のコマンドを入力して、HTTPサーバーを起動する。
```
    python3 -m http.server --cgi 8080
```

### `Step 3`
ブラウザから、以下のURLでアクセスする。
```
    http://localhost:8080/index.html
```
### `Step 4`
[CSVグラフ作成]ボタンを押す。

### `Step 5`
テキストエディタを使って sample.csv ファイルの内容に時刻・温度・湿度データを追加した後、`Step 4` を実行するとグラフが書き換わる。

