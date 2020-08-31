# MERN TODO App

This is a full-stack web application created to learn to use the MERN (MongoDB, ExpressJS, ReactJS, NodeJS) tech stack to create a full-stack web application. This project is a TODO app where you can create tasks to do, who is responsible for it, its priority, and set if the task has been completed. The tasks are stored in the MongoDB database and can be edited.

The project was inspired by the following tutorial: https://codingthesmartway.com/the-mern-stack-tutorial-building-a-react-crud-application-from-start-to-finish-part-1/

## What I Learned
- How to set up the database with MongoDB
- Use ExpressJS and NodeJS at the web framework and backend language
- Using Mongoose to interact with the MongoDB database in an object-oriented way
- Setting up API endpoints with GET, POST, and DELETE requests to fetch todos, create todos, and edit todos

## Screenshots
![TODO Home Page](https://github.com/EltonK888/MERN_Stack_TODO/blob/master/screenshots/TODO_home_page.PNG)
![Create TODO](https://github.com/EltonK888/MERN_Stack_TODO/blob/master/screenshots/Create_TODO.PNG)
![Edit TODO](https://github.com/EltonK888/MERN_Stack_TODO/blob/master/screenshots/Edit_TODO.PNG)

## To run the server locally

Make sure you have `NodeJS` and `MongoDB` installed. Create a MongoDB database called `todos`.

Start MongoDB by using the following command.
```
$  mongod
```

Then create the `todos` MongoDB database.
```
$  mongo
$  use todos
```


Run `npm install` in the back-end and front-end directories to install the required node modules
```
$  npm install
```

Lasty, in the front-end directory, run the following command.
```
$  npm start
```
and open http://localhost:3000/ in the browser
