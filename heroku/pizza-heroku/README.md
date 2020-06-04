# Project 3

Web Programming with Python and JavaScript

# First steps:
cd C:\Users\spa3cap\Documents\GitHub\django (0)
py -3 -m venv venv(win) python3 -m venv venv (mac) (install virtual enviroment)
venv\Scripts\activate(win) . venv/bin/activate (mac) (activate) (1)
python -m pip install --upgrade pip (update pip)
pip install Django==3.0.6
pip3 install -r requirements.txt
cd c:\Users\spa3cap\Documents\Github\project3\pizza (2)
django-admin startproject pizza (creates the project)
cd pizza
python manage.py startapp orders (creates the app)

## (orders/urls.py - create)
from django.urls import path
from . import views
urlpatterns = [
    path("", views.index, name="index")
]

## (orders/views.py)
from django.http import HttpResponse
from django.shortcuts import render
def index(request):
    return HttpResponse("Project 3: TODO")

## (pizza/urls.py)
from django.contrib import admin
from django.urls import include, path
urlpatterns = [
    path("", include("orders.urls")),
    path("admin/", admin.site.urls),
]

## (pizza/setings.py)
INSTALLED_APPS = [
    'orders.apps.OrdersConfig',
    'django.contrib.admin',

 # (shell)
 > python manage.py runserver   

## (orders/models.py)
class Topping(models.Model):
    name = models.CharField(max_length=64)
    def __str__(self):
        return f"{self.name}"

## (shell)
> from orders.models import Topping
> t = Topping (name="Pepperoni")
> t.save()
> Topping.objects.all()

## (orders/admin.py)
from .models import Topping
admin.site.register(Topping)
> python manage.py createsuperuser
> user: spa3cap
> pass: Bambilandia
run the server and then access the admin route

## rendering html example

## html inheritance

## start again with the models
erase the db.sqlite3
erase the migrations files
> python manage.py createsuperuser

## cross-site request forgery:
add {% csrf_token %} inside the form:
<form...>
   {% csrf_token %}
   <select ...> ...

## managin models (done)

## add static files (done)
add css file (done)
add js file (done)

## users administration (done)
(shell)
>
> user = User.objects.create_user(username="alice", email="alice@something.com", password="alice12345")
user.first_name = "Alice"
user.last_name = "Appleseed"
user.save()

## variable route (...)

## create an ajax request (...)



# Deploy in heroku:
$ heroku create --name tar-pizza
(https://tar-pizza.herokuapp.com/ | https://git.heroku.com/tar-pizza.git)

(requirements.txt) - create
django
gunicorn
django-heroku
requests

(runtime.txt) - create
python-3.7.6

(Procfile) - create
web: gunicorn pizza.wsgi --log-file -

(settings.py)
import django_heroku
..
django_heroku.settings(locals())

$ git add .
$ git commit -m "test"
$ git push heroku master
$ heroku open






$ python manage.py createsuperuser
username: tar
pass: tar123

$ python manage.py migrate

# to run locally with the remote db:
(.env)
DATABASE_URL = postgres://ggwysjrkpbhuim:6d718785a3462101656b7208a55fa72dea54252f18ca5eb01258f2e06e31f62c@ec2-3-91-139-25.compute-1.amazonaws.com:5432/d8ltbduraf12fg

or

$ heroku config (to see the DATABASE_URL)
postgres://ggwysjrkpbhuim:6d718785a3462101656b7208a55fa72dea54252f18ca5eb01258f2e06e31f62c@ec2-3-91-139-25.compute-1.amazonaws.com:5432/d8ltbduraf12fg

$ export DATABASE_URL=postgres://ggwysjrkpbhuim:6d718785a3462101656b7208a55fa72dea54252f18ca5eb01258f2e06e31f62c@ec2-3-91-139-25.compute-1.amazonaws.com:5432/d8ltbduraf12fg

# to run locally (runserver) with the local db:

$ psql
$ CREATE DATABASE mydb;
$ CREATE USER myuser WITH ENCRYPTED PASSWORD 'mypass';

(recommended for django:)
$ ALTER ROLE myuser SET client_encoding TO 'utf8';
$ ALTER ROLE myuser SET default_transaction_isolation TO 'read committed';
$ ALTER ROLE myuser SET timezone TO 'UTC';

$ GRANT ALL PRIVILEGES ON DATABASE mydb TO myuser;
$ \q

(pizza/settings.py)
DATABASES = {
    'default': {
        'ENGINE': 'django.db.backends.postgresql_psycopg2',
        'NAME': 'mydb',
        'USER': 'myuser',
        'PASSWORD': 'mypass',
        'HOST': 'localhost',
        'PORT': '',
    }
}

$ python manage.py makemigrations
$ python manage.py migrate
$ python manage.py createsuperuser
name: tar
password: tar12345678

# to run locally with heroku local:
- did't work

export DATABASE_URL=postgresql://myuser:mypass@localhost/mydb?sslmode=disable   

export DATABASE_URL=postgres://localhost/mydb?sslmode=disable


# before the change
DATABASES = {
    'default': {
        'ENGINE': 'django.db.backends.sqlite3',
        'NAME': os.path.join(BASE_DIR, 'db.sqlite3'),
    }
}
