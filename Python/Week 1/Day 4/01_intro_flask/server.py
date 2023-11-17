from flask import Flask , render_template  # Import Flask to allow us to create our app
app = Flask(__name__)    # Create a new instance of the Flask class called "app"
@app.route('/')          # The "@" decorator associates this route with the function immediately following
def hello_world():
    return 'Hello World!'  # Return the string 'Hello World!' as a response

# http://127.0.0.1
@app.route('/hello')
def hello():
    return "Hello From Server❤️❤️❤️"


@app.route('/hello/user')
def say_heello():
    return "<h1>Hello James </h1>"

@app.route('/hello/user/<username>')
def say_hello_username(username):
    return f"<h1>Hello {username}</h1>"

@app.route('/hello/user/<username>/times')
def say_hello_username_n_times(username, times):
    return f"<h1>Hello {username}</h1>" * times

@app.route('/index/<username>/<int:age>')
def user_info(username, age):
    users = [
        {'name':"john", 'age':35},
        {'name':"Sarah", 'age':25},
        {'name':"Alex", 'age':28}
        ]
    return render_template("index.html", user = username, number =age, users=users)




if __name__=="__main__":   # Ensure this file is being run directly and not from a different module    
    app.run(debug=True)    # Run the app in debug mode.



