# 授業メモ
## Pythonで気をつけてほしいこと
- MacとWindowsのコマンドの違い
    - Macだと`python3`でPC内のPythonを実行する
      - `python3 -m venv venv` で仮想環境を作る
    - Winだと`py` or `python`でPC内のPythonを実行する
      - `py -m venv venv` で仮想環境を作る
- 仮想環境を作る理由
    - 仮想環境とは
        - プロジェクトのフォルダに小さなpython(pip)のインストールをすること(venvというフォルダ)
        - インストールとは？ => フォルダを作って実行ファイルを配置すること + PATHを通す
    - PC内のPythonとプロジェクトのPythonの違いを吸収、独立
    - PC内のPythonを使っていると問題が出てくる  
        1. プロジェクトごとにバージョンが違う
        2. pipでインストールされているパッケージが拡大していく
        3. 他人に共有するパッケージを絞る
    - インストールしたパッケージはファイルにまとめる
        - requirements.txt (名前は自由。基本的は名前は「requirements.txt」)
- VSCodeのPython実行のとき
    - 実行ボタンで実行すると制御しずらい (途中で止める)
        - ただし、途中で操作できるならOK
    - 仮想環境のPythonを使ってないことがある
        - PCのPython=>仮想環境のPythonに切り替える
            - Mac: `source ./venv/bin/activate`
            - Win: `venv\Scripts\activate.bat` or `venv\Scripts\activate.ps1`

## インストールするパッケージ
- Flask

### インストールする際の注意
- メンテナンスされているか・問題が出ているか
- インストール方法

## プロジェクトを共有する
- `pip freeze > requirements.txt`でインストールしたパッケージのリストを`requirements.txt`に出力する
