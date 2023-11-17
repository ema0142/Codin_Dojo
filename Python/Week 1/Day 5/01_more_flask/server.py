from flask import Flask , render_template  # Import Flask to allow us to create our app
app = Flask(__name__)    # Create a new instance of the Flask class called "app"
         # The "@" decorator associates this route with the function immediately following
 # Return the string 'Hello World!' as a response

# http://127.0.0.1
@app.route('/')
def index():
     users = [
        {'name':"john", 'age':35},
        {'name':"Sarah", 'age':25},
        {'name':"Alex", 'age':28}
        ]
     return render_template("index.html", users =users)

@app.route('/circles/<color>/<int:number>')
def circles(color, number):
     return render_template("circles.html", color=color, number=number)
if __name__=="__main__":   # Ensure this file is being run directly and not from a different module    
    app.run(debug=True)    # Run the app in debug mode.


