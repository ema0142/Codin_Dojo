from flask import Flask, render_template
app = Flask(__name__)    
@app.route('/play/<int:nombre>/<color>')          
def box(nombre, color):
   return  render_template("index.html", nombre=nombre, color=color)






if __name__=="__main__":      
    app.run(debug=True)    

