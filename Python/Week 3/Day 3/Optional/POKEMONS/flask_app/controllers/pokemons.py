from flask_app import app
from flask import request ,render_template, session, redirect, flash
from flask_app.models.user import User
from flask_app.models.pokemon import Pokemon

@app.route('/pokemons/new')
def new():
    if 'user_id' in session:
        return render_template('new.html')
    return redirect('/')

@app.route('/pokemons/create', methods=['post'])
def create():
    if (Pokemon.validate(request.form)):
        data ={
            **request.form, 'user_id': session['user_id']
        }
        Pokemon.add(data)
        return redirect('/dashboard')
    return redirect('/pokemons/new')

@app.route('/pokemons/<int:id>')
def one(id):
    if 'user_id' in session:
        p = Pokemon.get_by_id({'id' : id})
        return render_template('one.html', p=p)
    return redirect('/')

@app.route('/pokemons/<id>/destroy')
def delete(id):
    Pokemon.delete({'id' : id})
    return redirect('/dashboard')

@app.route('/pokemons/<id>/edit')
def edit(id):
    p=Pokemon.get_by_id({'id':id})
    return render_template('edit.html',p=p)
@app.route('/pokemons/<id>/update',methods=['post'])
def update(id):
    if (Pokemon.validate(request.form)):
        data ={
            **request.form, 'id':id
        }
        Pokemon.edit(data)
        return redirect('/dashboard')
    return redirect('/pokemons/'+id+'/edit')