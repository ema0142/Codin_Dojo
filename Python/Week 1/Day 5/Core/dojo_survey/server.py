from flask import Flask, render_template, session, redirect,request

app = Flask(__name__)
app.secret_key='emna'



@app.route('/')
def index():
    return render_template("index.html")


@app.route('/process',methods=['POST'])
def process():
    session['name'] = request.form['name']
    session['location'] = request.form['location']
    session['language'] = request.form['language']
    session['Commentaire'] = request.form['Commentaire']
    return redirect('/box')

@app.route('/box')
def success():
    return render_template('box.html')
    
if __name__=="__main__":
    app.run(debug=True, port=5555)