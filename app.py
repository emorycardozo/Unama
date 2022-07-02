from flask import Flask, render_template


app = Flask(__name__)


@app.route("/")
def index():
    return render_template("homepage.html")


@app.route("/obrigado")
def typ():
    return render_template("typ-unama.html")
