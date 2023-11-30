from flask import Flask, render_template
app = Flask(__name__)    # Create a new instance of the Flask class called "app"
@app.route('/play/<int:nombre>/<color>')          # The "@" decorator associates this route with the function immediately following
def box(nombre, color):
   return  render_template("index.html", nombre=nombre, color=color)






if __name__=="__main__":   # Ensure this file is being run directly and not from a different module    
    app.run(debug=True)    # Run the app in debug mode.

