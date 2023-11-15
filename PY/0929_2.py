import sqlite3
#データベースに接続
con = sqlite3.connect("./sample.sqlite3")
#カーソルオブジェクトの作成
cur = con.cursor()

#テーブル作成　テーブル名（Okashi）
sql = "CREATE TABLE IF NOT EXSISTS friends(name varchar(10),old int,address varchar(10));"
cur.execute(sql)
sql = "INSERT INTO friends VALUES(?.?.?)"
data=[
    ("Yamada",14,"Tokyo")
    ("Suzuki",16,"Nagoya")
    ("Mori",12,"Osaka")
    ("Kudou",20,"Sapporo")
    ("Sasaki",18,"Fukuoka")
    
]

#複数のデータを追加したい場合はexecutemanyメソッドを使う
cur.executemany(sql,data)
#追加
cur.execute("SELECT * from friends WHERE old >= 14 and old<=15;")
cur.execute("SELECT * from friends WHERE old >= 14 and name = 'Yamada';")
cur.execute("SELECT * from friends WHERE old between 10 and 15;")
cur.execute("SELECT * from friends WHERE address between 'A' and 'O';")
cur.execute("SELECT * from friends WHERE name like'_____'")
print("該当データ一覧",cur.fetchall())#追加
con.commit()#保存
con.close()#接続終了