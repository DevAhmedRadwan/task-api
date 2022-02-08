# todo api

this is a very simple task management api made with nodejs(expressjs)

# how to start with docker

- need to have docker on your system
- create .dev.env file from .example.env and customize it for your enviroment
- build the api docker images "docker build . -t todo-api"
- start the container by excuting this command "docker-compose up" or lookup the commands section for help
- stop project by ctrl+c
- remove the container by excuting this command "docker-compose down" or lookup the commands section for help

# how to start without docker

- need to have nodejs and npm
- use "npm i" to get all the dependancies
- update the nodemon.json by adding this:
  "env": {
  "NODE_ENV": "development",
  "PORT": "5000"
  },
- use this command "npm run dev" to run in dev environment

# routes

- GET /api/tasks/
- POST /api/tasks/
- PUT /api/tasks/:id
- DELETE /api/tasks/:id

# dependencies

- cors: to manage Cross-Origin Resource Sharing headers
- uuid: to generate the ids for the tasks
- express: to manage routing , requests, reponces and errors
- express-validator: to validate user requests

# note

<p>
there is no docker file for building or deploying only for development
because i don't intend on deploying this project for now
</p>

# warning

there is authentication or authrization so all users can access all the tasks
