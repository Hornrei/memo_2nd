#!/bin/bash
#
# CGIサポート版 http.server の起動方法
#

python3 -m http.server --cgi 8080

#
# ブラウザからは、以下のURLでアクセスする
# http://localhost:8080/index.html
#
