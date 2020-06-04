
# docker getting started from the docker desktop

- git clone https://github.com/docker/getting-started.git

(build the container)
- docker build -t docker101tutorial . (docker101tutorial is the tag)

(run the container)
- docker run -d -p 80:80 --name docker-tutorial docker101tutorial

(share the container)
- docker tag docker101tutorial tarsiciosh/docker101tutorial
- docker push tarsiciosh/docker101tutorial

## Getting our app
(Dockerfile)
FROM node:12-alpine
WORKDIR /app
COPY . .
RUN yarn install --production
CMD ["node", "/app/src/index.js"]

$ docker build -t getting-started .
$ docker run -dp 3000:3000 --name myDocker getting-started

## Updating our app
(src/static/js/app.js)
line 56 "new text"

$ docker build -t getting-started .
$ docker run -dp 3000:3000 getting-started
(-> error)

- delete the container
$ docker ps ( ID : d86da960d354)

$ docker stop d86da960d354
$ docker rm d86da960d354

$ docker rm -f d86da960d354 (shortened version)

## Sharing our app
- create a repository in dockerhub (getting-started)

$ docker push tarsiciosh/getting-started:tagname
(-> error)

$ docker image ls (list the images)
(-> don't see that image)

$ docker login -u tarsiciosh
$ docker tag getting-started tarsiciosh/getting-started
$ docker push tarsiciosh/getting-started

- open the Play with Docker (add new instance)
$ docker run -dp 3000:3000 tarsiciosh/getting-started

## tag test
$ docker build -t getting-started:myTag .
$ docker tag getting-started:myTag tarsiciosh/getting-started:myTag
$ docker push tarsiciosh/getting-started:myTag

## Persisting our DB
$ docker ps (to see the container id)
$ docker exec <container-id> cat /data.txt
$ docker run -it ubuntu ls / (there is no data.txt)
$ docker rm -f 82ecacff738b

### Named volume
$ docker volume create todo-db
$ docker run -dp 3000:3000 -v todo-db:/etc/todos getting-started
- add some todos
$ docker ps (->311eebe75f97)
$ docker rm -f 311eebe75f97
$ docker run -dp 3000:3000 -v todo-db:/etc/todos getting-started
- see the changes persisting
- delete docker

$ docker volume inspect todo-db (to see the actual location)
(:::::::)

## Using Bind Mounts
$ docker run -dp 3000:3000 \
    -w /app -v ${PWD}:/app \
    node:12-alpine \
    sh -c "yarn install && yarn run dev"
$ docker ps
$ docker logs - f 3caff35053f4
- change src/static/js/app.js line 109 "Add Item" -> "Add"
- refresh the page -> see the changes
- stop the container
$ docker build -t getting-started

## Multi-Container Apps
### Starting MySQL
$ docker network create todo-app
$ docker run -d \
    --network todo-app --network-alias mysql \
    -v todo-mysql-data:/var/lib/mysql \
    -e MYSQL_ROOT_PASSWORD=secret \
    -e MYSQL_DATABASE=todos \
    mysql:5.7
(create the named volume automatically)
$ docker ps
$ docker exec -it <mysql-container-id> mysql -p
-> password: secret
mysql> SHOW DATABASES
- see the databases

## Connecting to MySQL
$ docker run -it --network todo-app nicolaka/netshoot
$$ dig mysql
...
A 172.19.0.2 (only to see the ip but the network-alias is important)
...
$$ exit

docker run -dp 3000:3000 \
  -w /app -v ${PWD}:/app \
  --network todo-app \
  -e MYSQL_HOST=mysql \
  -e MYSQL_USER=root \
  -e MYSQL_PASSWORD=secret \
  -e MYSQL_DB=todos \
  node:12-alpine \
  sh -c "yarn install && yarn run dev"

- add some itmes

$ docke ps
$ docker exec -ti <mysql-container-id> mysql -p todos
mysql> select * from todo_items;

# Using Docker Compose
$ docker-compose version

(docker-compose.yml) - create
version: "3.7"

services:
  app:
    image: node:12-alpine
    command: sh -c "yarn install && yarn run dev"
    ports:
      - 3000:3000
    working_dir: /app
    volumes:
      - ./:/app
    environment:
      MYSQL_HOST: mysql
      MYSQL_USER: root
      MYSQL_PASSWORD: secret
      MYSQL_DB: todos

  mysql:
    image: mysql:5.7
    volumes:
      - todo-mysql-data:/var/lib/mysql
    environment:
      MYSQL_ROOT_PASSWORD: secret
      MYSQL_DATABASE: todos

volumes:
  todo-mysql-data:

$ docker-compose up -d (-d: in background)
$ docker-compose logs -f (follow the logs - live output)
$ docker-compose logs -f app (logs only from app)
$ docker-compose down --volumes

# Image Building Best Practices
$ docker image history getting-started
$ docker image history --no-trunc getting-started

(Dockerfile)
FROM node:12-alpine
WORKDIR /app
COPY package.json yarn.lock ./
RUN yarn install --production
COPY . .
CMD ["node", "/app/src/index.js"]

$ docker build -t getting-started .

- change the src/static/index.html -> "The Awesome Todo App"

$ docker build -t getting-started .


# Image Layering

$ docker image history getting-started

$ cocker image history --no-trunc getting-started



# Django-example

- crate Dockerfile
- create requirements.txt
- create docker-compose.yml

$ docker-compose run web django-admin startproject composeexample .







.
