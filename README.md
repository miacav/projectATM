(Done on Windows)
-Make the flask_auth_app directory
-run the following:
  > python3 -m venv auth
  > cd flask_auth_app
  > auth\Scripts\activate.ps1
  > $env:FLASK_APP="project"
  > $env:FLASK_DEBUG="1"
  (auth) > pip install flask flask-sqlalchemy flask-log
-Create the project folder and insert the files from the repository as so:

.
└── flask_auth_app
    └── project
        ├── __init__.py     
        ├── auth.py         
        ├── main.py           
        ├── models.py         
        └── templates
            ├── base.html     
            └── addaccts.html
-Entries in the SQLite database can be inserted through 
-Open the python CLI and run the following commands:
  > from project import db, create_app, models
  > app = create_app() 
  > with app.app_context():
  > ...   db.create
  > exit()

The database will be stored in flask_auth_app/instances. You can replace it with the db.sqlite file included here.
DB Browser can also be used to alter the db.

For the following part, I used the command
  > npx create-react-app front
as a starting point for the frontend.
Replace the package.json file with the one in this repo.
Replace front/src/App.js.

Create a folder called 'pages' in /front/src and add all of the .js files. 

Now run 
  > flask run
in the (auth) venv and
  > npm start
in another shell.

This should allow the pages to be seen at http://127.0.0.1:3000 and the account insertion interfact
at https://127.0.0.1:5000



