from flask import Flask , render_template  
app = Flask(__name__)   


@app.route('/circles/<color>/<int:number>')
def circles(color, number):
     return render_template("circles.html", color=color, number=number)



if __name__=="__main__":       
    app.run(debug=True)    
