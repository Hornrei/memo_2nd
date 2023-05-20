from flask import Flask
app = Flask(__name__)
@app.route("/")
def index():
    return "Hello komiyaman"

@app.route("/hello",methods=["GET"],endpoint="hello_endpoint")
def hello():
    return "Hello tsurutaka!"


app.run()
