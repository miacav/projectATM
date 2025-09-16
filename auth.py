from flask_login import login_user, login_required
from flask import Blueprint, render_template, redirect, url_for, request, flash
from werkzeug.security import generate_password_hash, check_password_hash
from sqlalchemy import func
from .models import User, Account
from . import db

auth = Blueprint('auth', __name__)

@auth.route('/login')
def login():
    #return render_template('login.html')
    return {'name':'me'}

# @auth.route('/login', methods=['POST'])
# def login_post():
#     email = request.form.get('email')
#     password = request.form.get('password')
#     remember = True if request.form.get('remember') else False

#     user = User.query.filter_by(email=email).first()

#     if not user or not check_password_hash(user.password, password):
#         flash('Please check your login details and try again.')
#         return redirect(url_for('auth.login')) # if the user doesn't exist or password is wrong, reload the page

#     login_user(user, remember=remember)
#     return redirect(url_for('main.profile'))

@auth.route('/login/please', methods=['POST'])
def login_please():
    mydata = request.get_json()
    email = mydata['email']
    password = mydata['password']
    # remember = True if request.form.get('remember') else False

    user = User.query.filter_by(email=email).first()

    if not user or not check_password_hash(user.password, password):
        #flash('Please check your login details and try again.')
        #return redirect(url_for('auth.login')) 
        return {'status': 'no'}

    login_user(user, remember=True)
    #return redirect(url_for('main.profile'))
    return {'status': 'yes'}


# @auth.route('/tryUser/<int:id>', methods=['GET'])
# @login_required
# def tryUser(id):
#     return {'name': 'mia'}

@auth.route('/addAccounts')
def myadd():
    return render_template('addaccts.html')

@auth.route('/addAccounts', methods=['POST'])
def add_accts():
    id = int(request.form.get('id'))
    bal = request.form.get('balance')
    daily = request.form.get('daily_limit')
    last_wd = func.current_date()
    amt_wd = 0

    new_acct = Account(id=id, balance=bal, last_withdrawal=last_wd, amt_withdrawn=amt_wd, daily_limit=daily)
    db.session.add(new_acct)
    db.session.commit()

    return redirect(url_for('auth.login'))

#@login_required
@auth.route('/profile/me')
def profile():
    return {'profile' : 'yay'}

# @auth.route('/logout')
# @login_required
# def logout():
#     logout_user()
#     return redirect(url_for('main.index'))