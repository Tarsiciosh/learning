# Python: Getting Started

A barebones Django app, which can easily be deployed to Heroku.

This application supports the [Getting Started with Python on Heroku](https://devcenter.heroku.com/articles/getting-started-with-python) article - check it out.

## Running Locally

Make sure you have Python 3.7 [installed locally](http://install.python-guide.org). To push to Heroku, you'll need to install the [Heroku CLI](https://devcenter.heroku.com/articles/heroku-cli), as well as [Postgres](https://devcenter.heroku.com/articles/heroku-postgresql#local-setup).

```sh
$ git clone https://github.com/heroku/python-getting-started.git
$ cd python-getting-started

$ python3 -m venv getting-started
$ pip install -r requirements.txt

$ createdb python_getting_started

$ python manage.py migrate
$ python manage.py collectstatic

$ heroku local
```

Your app should now be running on [localhost:5000](http://localhost:5000/).

## Deploying to Heroku

```sh
$ heroku create
$ git push heroku master

$ heroku run python manage.py migrate
$ heroku open
```
or

[![Deploy](https://www.herokucdn.com/deploy/button.svg)](https://heroku.com/deploy)

## Documentation

For more information about using Python on Heroku, see these Dev Center articles:

- [Python on Heroku](https://devcenter.heroku.com/categories/python)


Steps from the page:

# SETUP
$ brew install heroku/brew/heroku
$ heroku login

# PREPARE THE APP
$ git clone https://github.com/heroku/python-getting-started.git
$ cd python-getting-started (getting-started-heroku)

# DEPLOY THE APP
$ heroku create (afternoon-tundra-29729)
$ git push heroku master
$ heroku ps:scale web=1 (Ensure that at least one instance of the app is running)
$ heroku open

# VIEW LOGS
$ heroku logs --tail (view logs)

# DEFINE A PROCFILE
(Procfile)
web: gunicorn gettingstarted.wsgi --log-file -

# SCALE THE APP
$ heroku ps (how many dynos are running)
$ heroku ps:scale web=0
$ heroku ps:scale web=1

# DECLARE APP DEPENDENCIES
$ pip install -r requirements.txt (Postgres must be properly installed)
$ pip list

# RUN THE APP LOCALLY
$ python manage.py collectstatic
$ heroku local web  (http://localhost:5000)

# PUSH LOCAL CHANGES
$ pip install requests

(requirements.txt)
...
requests

(hello/views.py)
import requests
..
def index(request):
    r = requests.get('http://httpbin.org/status/418')
    print(r.text)
    return HttpResponse('<pre>' + r.text + '</pre>')

$ heroku local (to test locally)

# new deploy
$ git add .
$ git commit -m "demo"
$ git push heroku master
$ heroku open

# PROVISION ADD-ONS
$ heroku addons:create papertrail (needs credit card)
$ heroku addons
$ heroku addons:open papertrail

#START A CONSOLE (one-off dyno)
$ heroku run python manage.py shell
>>>  import requests
>>> print(requests.get('http://httpbin.org/status/418').text)
>>> exit()

$ heroku run bash

#DEFINE CONFIG VARS
(hello/views.py)
import os
..
def index(request):
    times = int(os.environ.get('TIMES',3))
    return HttpResponse('Hello! ' * times)

heroku local will automatically set up the environment based on the contents of the .env file in your local directory. In the top-level directory of your project there is already a .env file that has the following contents:

(.env)
TIMES=2

$ heroku local

$ heroku config:set TIMES=2 (to set the remote config vars)
$ heroku config

#PROVISION A DATABASE
$ heroku addons
$ heroku config

DATABASE_URL: postgres://tbdlxsaxwqrggd:689b628e8bc240983bece81cbdc01c5ac190d6d5232c261f02c77a98e7c17587@ec2-52-202-22-140.compute-1.amazonaws.com:5432/deelo14aba2ruc

$ heroku pg

visit: https://afternoon-tundra-29729.herokuapp.com/db/
$ heroku run python manage.py migrate
$ heroku open

(db.html)
CHANGE: staticfiles -> static
