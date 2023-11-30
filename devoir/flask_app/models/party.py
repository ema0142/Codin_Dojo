from flask import flask
from flask_app import DATABASE
from flask_app.config.mysqlconnection import connectToMySQL


class Party:
    def __init__(self, data_dict):
        self.id = data_dict["id"]
        self.user_id = data_dict["user_id"]
        self.location = data_dict["location"]
        self.date = data_dict["date"]
        self.all_ages = data_dict["all_ages"]
        self.description = data_dict["description"]



# 1-creat
@classmethod
def crate(cls.data):
    query = """INSERT INFO parties
                              (user_id, title, location, date, all_agers, description)
                        VALUES 
                              (%(user_id)s, %(title)s, %(location)s,%(date)s, %(all_agers)s,  %(description)s) """
    return connectToMySQL (DATABASE).query_db(query. data)

#2-Read
#2-2 Get one Party By ID










# 3-UPDATE
@classmethod
def update(cls, data):
    query = """UPDATE partie SET title = %(title)s, location= %(location)s
                                            ,date =%(date)s, all_agres = %(all_agres)s,
                                             description =%(description)
                                             WHRE id =%(id)s;
                                             """
    return connectToMySQL(DATABASE)query_db(query, data)

#4-DESROY
@classmethod
def destroy(cls,data):
    query ="""DELET FROM PARTIES WHERE id=%(id)s;"""

    

