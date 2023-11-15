import sqlite3
#データベースに接続
con = sqlite3.connect("./sample.sqlite3")
#カーソルオブジェクトの作成
cur = con.cursor()

#テーブル作成　テーブル名（Okashi）
sql = "CREATE IF NOT EXSISTS Okashi(Number, Name, OkashiName, Price);"
cur.execute(sql)
sql = "INSERT INTO Okashi VALUES(?.?.?.?)"
data={
    (1,"arice","candy",100)
    (2,"arice","candy",50)
    (3,"arice","cookie",30)
    (4,"Bob","chocolate",200)
    (5,"Bob","chocolate",20)
    (6,"Bob","cookie",20)
}

#複数のデータを追加したい場合はexecutemanyメソッドを使う
cur.executemany(sql,data)
#追加
cur.execute("SELECT name from sqlite_master where type='table';")
print("table一覧",cur.fetchall())#追加
con.commit()#保存
con.close()#接続終了