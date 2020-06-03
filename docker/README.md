
# docker getting started from program

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

## Persisting our app
- docker ps (to see the container id)
- docker exec <container-id> cat /data.txt
- docker run -it ubuntu ls / (there is no data.txt)
- docker rm -f 82ecacff738b
- 



.
