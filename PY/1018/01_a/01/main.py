from flask import Flask

import mysql.connector

app = Flask(__name__)

def database_connection():
    #ここにデータベースの接続処理を書く
    #host, port, user, password, database
    try:    
        cnx = mysql.connector.connect(
            user='root',
            password='',
            #　password='root',
            host='localhost',
            database='py')

        if cnx.is_connected:
            print("接続成功")
            cur = cnx.cursor()
            cur.execute('SELECT * FROM users')
            rows = cur.fetchall()
            for row in rows:
                print(row)
    except mysql.connector.Error as err:
        print(err)
    finally:
        #接続を閉じる
        cnx.close()



@app.route("/")
def hello_world():
    database_connection()
    return "<p>Hello, World!</p>"


@app.route("/ebata")
def ebata4():
    return "<p style='color: red;'>Hello, Ebata!</p>"


if __name__ == "__main__":
    app.run(debug=True, host="localhost", port=8080)

# from flask import Flask
# import mysql.connector

# app = Flask(__name__)

# def database_connection():
#     # データベースの接続処理を書く
#     try:
#         cnx = mysql.connector.connect(
#             user='root',
#             password='',  # パスワードが空の場合
#             host='localhost',
#             database='your_database_name'  # データベース名を指定
#         )

#         if cnx.is_connected():
#             print("接続成功")
#     except mysql.connector.Error as err:
#         print(err)
#     finally:
#         # 接続を閉じる
#         cnx.close()

# @app.route("/")
# def hello_world():
#     database_connection()
#     return "<p>Hello, World!</p>"

# @app.route("/ebata")
# def ebata4():
#     return "<p style='color: red;'>Hello, Ebata!</p>"

# if __name__ == "__main__":
#     app.run(debug=True, host="localhost", port=8080)

