from flask_app.config.mysqlconnection import connectToMySQL
from flask_app import DATABASE
from flask import flash


class Pokemon: 
    def __init__(self, data):
        self.id = data['id']
        self.name = data['name']
        self.type = data['type']
        self.power = data['power']
        self.hp = data['hp']
        self.image = data['image']
        self.user_id = data['user_id']
        self.created_at = data['created_at']
        self.updated_at = data['updated_at']

    @classmethod
    def add(cls, data):
        query = """INSERT INTO pokemons (name, type, power, hp, image, user_id)
                                VALUES(%(name)s, %(type)s, %(power)s, %(hp)s, %(image)s, %(user_id)s);"""
        return connectToMySQL(DATABASE).query_db(query, data)
    
    @classmethod
    def get_pokemon_by_user(cls, data):
        query = """
        SELECT * FROM pokemons
                            JOIN users ON users.id = pokemons.user_id
                            WHERE users.id = %(user_id)s;"""
        results = connectToMySQL(DATABASE).query_db(query, data)
        pokemons = []
        for row in results:
            pokemons.append(cls(row))
        return pokemons
    
    @classmethod
    def get_by_id(cls, data):
        query = """
        SELECT * FROM pokemons 
        WHERE id = %(id)s;
        """
        result = connectToMySQL(DATABASE).query_db(query,data)
        return cls(result[0])
    
    @classmethod
    def edit(cls, data):
        query = """
        UPDATE pokemons SET name = %(name)s, type = %(type)s power = %(power)s, hp = %(hp)s, image = %(image)s 
        WHERE id = %(id)s;
        """
        return connectToMySQL(DATABASE).query_db(query, data)
    
    @classmethod
    def delete(cls, data):
        query = """DELETE FROM pokemons 
        WHERE id = %(id)s;"""
        return connectToMySQL(DATABASE).query_db(query, data)
    
    @staticmethod
    def validate(data):
        is_valid = True
        if len(data['name'])< 2:
            flash("First Name must be at least 3 ")
            is_valid = False
        if len(data['power'])< 1:
            flash("power must be positive")
            is_valid = False
        if len(data['hp'])< 1:
            flash("hp must be positive")
            is_valid = False
        if data['image'] == "":
            flash("you have to choose an image")
            is_valid = False
        return is_valid