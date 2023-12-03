from flask import Flask

app = Flask(__name__)

app.secret_key = "ema"
DATABASE = "recipes_schemaa"