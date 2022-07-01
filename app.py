from flask import Flask, render_template


app = Flask(__name__)


@app.route("/")
def index():
    return render_template("homepage.html")


@app.route("/obrigado")
def obrigado():
    return render_template("ty-page.html")
