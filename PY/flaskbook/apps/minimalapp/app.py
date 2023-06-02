from flask import Flask,  current_app, g, render_template, request, url_for, redirect

app = Flask(__name__)

@app.route("/contact")

def contact():
    return render_template("contact.html")

@app.route("/contact/complete",methods = ["GET","POST"])
def contact_complete():
    if request.method == "POST":
        username = request.form["username"]
        email = request.form["email"]
        description = request.form["description"]

        #メールを送る

        #contactエンドポイントへリダイレクトする
        return redirect(url_for("contact_complete"))
    return render_template("complete.html")

