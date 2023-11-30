from flask_app import app
from flask import render_template, redirect, request, flash, session
from flask_app.models.user import User
from flask_bcrypt import Bcrypt

bcrypt = Bcrypt(app)




@app.route("/")
def home():
    return render_template("index.html")

@app.route("/dashboard")
def dashboard():
    if not "user-id" in session:
        return redirect("/")
    return render_template("dashboard.html")