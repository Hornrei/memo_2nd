from flask import Flask, render_template, request, redirect, session, jsonify
import mysql.connector
import hashlib

app = Flask(__name__)
app.secret_key = "ebtih12a3b4c5d6e7f8g9h0i"
app.json.ensure_ascii = False


def database_connection():
    return mysql.connector.connect(
        user='root',
        # password='',
        password='root',
        host='localhost',
        # port='3306',
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
            # データベース切断
            cur.close()
            cnx.close()

            session["user"] = user
            session["login"] = True
            return True
        else:
            return False
    except Exception as e:
        return False


@app.route("/")
def index():
    login = session.get("login", False)
    return render_template("index.html", login=login)


@app.route("/login", methods=["GET"])
def login():

    if "login" in session and session["login"]:
        return redirect("/")

    return render_template("login.html")


@app.route("/login", methods=["POST"])
def login_post():
    # login処理
    email = request.form.get("email")
    password = request.form.get("password")

    if email is None or password is None:
        return redirect("/login")

    if authentification(email, password):
        return redirect("/")
    else:
        return redirect("/login")


@app.route("/logout")
def logout():
    # logout処理
    session.pop("user", None)
    session.pop("login", None)
    return redirect("/")

# 新規ユーザー登録


@app.route("/create_user", methods=["GET"])
def create_user():
    return render_template("create_user.html")


@app.route("/create_user", methods=["POST"])
def create_user_post():
    email = request.form.get("email")
    password = request.form.get("password")
    username = request.form.get("username")

    if email is None or password is None or username is None:
        return redirect("/create_user")

    password = hashlib.sha256(password.encode()).hexdigest()

    try:
        cnx = database_connection()
        if cnx is not None and cnx.is_connected:
            cur = cnx.cursor()
            sql = "INSERT INTO users (email, password, username) VALUES (%s, %s, %s)"
            cur.execute(sql, (email, password, username))
            cnx.commit()
            cur.close()
            cnx.close()
            return redirect("/login")
        else:
            return redirect("/create_user")
    except Exception as e:
        print(e)
        return redirect("/create_user")


@app.route("/dashboard")
def dashboard():
    return render_template("dashboard.html")


@app.route("/get_json")
def get_json():
    return jsonify({
        "news": [
            {
                "title": "PYの評価課題が発表されました",
                "body": "あああああああああああああああああ"
            },
            {
                "title": "PYの評価課題が発表されました2",
                "body": "あああああああああああああああああ"
            },
        ],
    })


if __name__ == "__main__":
    app.run(debug=True, host="localhost", port=5000)
