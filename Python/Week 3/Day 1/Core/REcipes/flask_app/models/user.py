from flask_app.config.mysqlconnection import connectToMySQL
import re  #the regex module
#create a regular expression cobject that we'll use late
EMAIL_REGEX = re.compile(r'^[a-zA-Z0-9.+_-]+@[a-zA-Z0-9._-]+\.[a-zA-Z]+$')
from flask import flash


class User:
    db_name = "recipes_schemaa"
    def __init__(self,data):
        self.id = data['id']
        self.first_name = data['first_name']
        self.last_name = data['last_name']
        self.email = data['email']
        self.password = data['password']
        self.created_at = data['created_at']
        self.updated_at = data['updated_at']
       

    @classmethod
    def save(cls,data):
        query = "INSERT INTO users (first_name,last_name,email,password) VALUES(%(first_name)s,%(last_name)s,%(email)s,%(password)s)"
        return connectToMySQL(cls.db_name).query_db(query,data)

    @classmethod
    def get_all(cls):
        query = "SELECT * FROM users;"
        results = connectToMySQL(cls.db_name).query_db(query)
        users = []
        for row in results:
            users.append( cls(row))


    @classmethod
    def get_by_email(cls, data): #!READ
        query="SELECT * FROM users WHERE email=%(email)s;"
        result= connectToMySQL(cls.db_name).query_db(query,data)

        if len(result) <1:
            return False
        return cls(result[0])

    @classmethod
    def get_by_id(cls, data): #!READ
        query="SELECT * FROM users WHERE id=%(id)s;"
        result= connectToMySQL(cls.db_name).query_db(query,data)

        if len(result) <1:
            return False
        return cls(result[0])


# * VALIDATIONS 
    @staticmethod
    def validate(data):
        is_valid = True
        if len(data['first_name'])< 2:
            flash("First Name must be at least 3 ")
            is_valid = False
        if len(data['last_name'])< 2:
            flash("Last name is required !!!!!!!")
            is_valid = False
        if not EMAIL_REGEX.match(data['email']): 
            flash("Invalid email address!")
            is_valid = False
        elif User.get_by_email({'email':data['email']}):
            flash("Email address already used , hope by you!")
            is_valid = False
        if len(data['password'])< 6:
            flash("Password too short")
            is_valid = False
        elif data['password'] != data['confirm']:
            flash("Password must match ")
            is_valid = False
        return is_valid



