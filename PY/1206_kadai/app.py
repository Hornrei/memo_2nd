from flask import Flask, render_template, request, redirect, session, jsonify
from flask_cors import CORS
import mysql.connector
import hashlib

app = Flask(__name__)
CORS(app)
app.config['DEBUG'] = True
app.secret_key = "ebtih12a3b4c5d6e7f8g9h0i"
app.json.ensure_ascii = False


def database_connection():
    return mysql.connector.connect(
        user='root',
        password='',
        #password='root',
        host='localhost',
        port='3306',
        database='py',
    )


def authentification(email, password):

    password = hashlib.sha256(password.encode()).hexdigest()

    try:
        # データベース接続
        cnx = database_connection()
        if cnx is not None and cnx.is_connected:
            cur = cnx.cursor()
            # SQL文
            sql = "SELECT * FROM users WHERE email = %s AND password = %s"
            cur.execute(sql, (email, password))
            # データ取得
            user = cur.fetchone()
            
            if not user:
                return False
            # データベース切断
            cur.close()
            cnx.close()
            print("だめ")
            session["user"] = user
            session["signin"] = True
            return True
        else:
            return False
    except Exception as e:
        return False

#ユーザーデータ取得
def getuserdata(email):
    try:
        # データベース接続
        cnx = database_connection()
        if cnx is not None and cnx.is_connected:
            cur = cnx.cursor()
            # SQL文
            sql = "SELECT * FROM users WHERE email = %s"
            cur.execute(sql, (email,))
            # データ取得
            user = cur.fetchone()
            # データベース切断
            cur.close()
            cnx.close()

            session["user"] = user
            session["signin"] = True
            return user
        else:
            return False
    except Exception as e:
        print(e)
        return False

def change_username(email, new_username):
    try:
        # データベース接続
        cnx = database_connection()
        if cnx is not None and cnx.is_connected:
            cur = cnx.cursor()
            # SQL文
            sql = "UPDATE users SET username = %s WHERE email = %s"
            cur.execute(sql, (new_username, email))
            cnx.commit()
            # データ取得
            # データベース切断
            cur.close()
            cnx.close()

            session["username"] = new_username
            session["signin"] = True
            return True
        else:
            return False
    except Exception as e:
        print(e)
        return False


@app.route("/")
def index():
    signin = session.get("signin", False)
    return render_template("index.html", signin=signin)


@app.route("/signin", methods=["GET"])
def signin():

    if "signin" in session and session["signin"]:
        print("ログイン済み")
        return redirect("/")

    return render_template("signin.html")


@app.route("/signin", methods=["POST"])
def signin_post():
    # signin処理
    email = request.form.get("email")
    password = request.form.get("password")

    if email is None or password is None:
        return redirect("/signin")

    if authentification(email, password):
        return redirect("/")
    else:
        return redirect("/signin")


@app.route("/signout")
def signout():
    # signout処理
    print("ろぐあうとしたよ")
    session.pop("user", None)
    session.pop("signin", None)
    session["signin"] = False
    return redirect("/")



# 新規ユーザー登録
@app.route("/signup", methods=["GET"])
def signup():
    return render_template("signup.html")


@app.route("/signup", methods=["POST"])
def signup_post():
    email = request.form.get("email")
    password = request.form.get("password")
    username = request.form.get("username")

    if email is None or password is None or username is None:
        return redirect("/signup")

    password = hashlib.sha256(password.encode()).hexdigest()

    try:
        cnx = database_connection()
        if cnx is not None and cnx.is_connected:
            cur = cnx.cursor()
            sql = "INSERT INTO users (email, password, username) VALUES (%s, %s, %s)"
            print("User authenticated successfully")
            cur.execute(sql, (email, password, username))
            cnx.commit()
            cur.close()
            cnx.close()
            
            return redirect("/signin")
        else:
            print("NG")
            return redirect("/signup")
    except Exception as e:
        print(e)
        return redirect("/signup")


@app.route("/dashboard")
def dashboard():
    print("koko1")
    # getuserdata(t@t) t@tの人のデータベース取得するよ
    user_data = getuserdata(session["user"][1])
    print("koko2")
    print(user_data) 
    data = {
        "username": user_data[3],
        "email": user_data[1]
    }
    print("koko3")
    return render_template("dashboard.html", data=data)


@app.route("/get_json")
def get_json():
    whale_data = {
        "whale_info": {
            "name": "くじらくん",
            "species": "シロナガスクジラ",
            "age": 5,
            "habitat": "太平洋",
            "description": "くじらくんはシロナガスクジラの仲間で、太平洋の美しい海で暮らしています。彼は5歳で、長さは約12.5メートル、体重は25.8トンあります。おおらかで優しい性格で、周りの仲間たちと仲良く暮らしています。"
        },
    }

    return jsonify(whale_data)


# ユーザー情報変更
@app.route("/change_username_post", methods=["POST"])
def change_username_post():
    new_username = request.form.get("username")
    email = session["user"][1]

    if new_username is None:
        return redirect("/dashboard")

    if change_username(email, new_username):
        return redirect("/dashboard")
    else:
        return redirect("/dashboard")
    
# パスワード変更
@app.route("/change_password_post", methods=["POST"])
def change_password_post():
    old_password = request.form.get("old_password")
    new_password = request.form.get("new_password")
    email = session["user"][1]

    if old_password is None or new_password is None:
        return redirect("/dashboard")

    if change_password(email, old_password, new_password):
        #もしパスワード変更に成功したら、サインアウトさせる
        return redirect("/signout")
    else:
        return redirect("/dashboard")

def change_password(email, old_password, new_password):
    try:
        cnx = database_connection()
        if cnx is not None and cnx.is_connected:
            cur = cnx.cursor()
            sql = "SELECT * FROM users WHERE email = %s AND password = %s"
            cur.execute(sql, (email, hashlib.sha256(old_password.encode()).hexdigest()))
            user = cur.fetchone()
            if user is not None:
                sql = "UPDATE users SET password = %s WHERE email = %s"
                cur.execute(sql, (hashlib.sha256(new_password.encode()).hexdigest(), email))
                cnx.commit()
                cur.close()
                cnx.close()
                return True
            else:
                return False
        else:
            return False
    except Exception as e:
        print(e)
        return False
    
#アカウント削除し、サインアウトさせる
@app.route("/delete_account", methods=["POST"])
def delete_account():
    email = session["user"][1]
    if delete_user(email):
        session["signin"] = False
        return redirect("/signout")
    else:
        print("えらーだよ")
        return redirect("/dashboard")

def delete_user(email):
    try:
        cnx = database_connection()
        if cnx is not None and cnx.is_connected:
            cur = cnx.cursor()
            sql = "DELETE FROM users WHERE email = %s"
            cur.execute(sql, (email,))
            cnx.commit()
            cur.close()
            cnx.close()
            return True
        else:
            return False
    except Exception as e:
        print(e)
        return False
    


#delete account
# @app.route("/delete_account", methods=["POST"])
# def delete_account():
#     email = session["user"][1]
#     if delete_user(email):
#         session["signin"] = False
#         return redirect("/signout")
#     else:
#         print("えらーだよ")
#         return redirect("/dashboard")

# def delete_user(email):
#     try:
#         cnx = database_connection()
#         if cnx is not None and cnx.is_connected:
#             cur = cnx.cursor()
#             sql = "DELETE FROM users WHERE email = %s"
#             cur.execute(sql, (email,))
#             cnx.commit()
#             cur.close()
#             cnx.close()
#             return True
#         else:
#             return False
#     except Exception as e:
#         print(e)
#         return False




if __name__ == "__main__":
    app.run(debug=True, host="localhost", port=5000)
