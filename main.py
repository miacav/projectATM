from flask import Blueprint, render_template, request
from flask_login import login_required, current_user
from .models import User, Account
from sqlalchemy import func
from . import db

main = Blueprint('main', __name__)

@main.route('/')
def index():
#     return render_template('index.html')
    return {"index": "what"}

# @main.route('/profile')
# @login_required
# def profile():
#     return {"profile": "yes"}

@main.route('/api/user/test', methods=['GET'])
@login_required
def api_balance():
    #my_acct = Account.query.filter_by(id=(User.query.filter_by(name=current_user.name).first().id)).first()
    return {'name': 'no'}


#@cross_origin()
@main.route('/api/user', methods=['PUT'])
@login_required
def api_change_bal():
    mydata = request.get_json()
    amt = int(mydata['amount'])
    my_acct = Account.query.filter_by(id=(User.query.filter_by(name=current_user.name).first().id)).first()

    #withdrawal time
    if amt < 0:
        newamt = my_acct.amt_withdrawn + (-1) * amt
        newbal = my_acct.balance + amt
        if func.current_date() == my_acct.last_withdrawal:
            if newamt <= my_acct.daily_limit and newbal >= 0:
                #update amt_wd
                my_acct.amt_withdrawn = newamt
                #update balance
                my_acct.balance = newbal

                db.session.commit()
                #respond with updated info
                return {'name': 'amt'}
            else:
                #respond with error
                return {'name': 'yes'}
        else:
            #update amt_wd to 0
            if newamt <= my_acct.daily_limit and newbal >= 0:
                #update amt_wd to amt_wd + amt
                my_acct.amt_withdrawn = newamt
                #update balance
                my_acct.balance = newbal
                #update last_wd
                my_acct.last_withdrawal = func.current_date()

                db.session.commit()
                #respond with updated info
                return {'name': 'amt'}
            else:
                #respond with error
                return {'name': 'yes'}
    elif amt > 0:
        #update balance
        my_acct.balance = my_acct.balance + amt

        db.session.commit()
        #respond with balance
        # return {'balance': my_acct.balance}
        return {'name': 'amt'}
    else:
        #respond w error?
        return {'name': 'yes'}