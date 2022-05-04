[![Maintainability](https://api.codeclimate.com/v1/badges/feda80196af0676510c6/maintainability)](https://codeclimate.com/github/key-joshua/upaged-backend/maintainability)
[![CircleCI](https://circleci.com/gh/key-joshua/upaged-backend/tree/main.svg?style=svg)](https://circleci.com/gh/key-joshua/upaged-backend/tree/main)
[![Coverage Status](https://coveralls.io/repos/github/key-joshua/upaged-backend/badge.svg)](https://coveralls.io/github/key-joshua/upaged-backend)
[![codecov](https://codecov.io/gh/key-joshua/upaged-backend/branch/main/graph/badge.svg?token=TdiYhXgS2b)](https://codecov.io/gh/key-joshua/upaged-backend)

# UPAGED BACKEND

Task for creating server application with Node.js

#### This is the Hosted link of the backend challenge
https://upaged-backend.herokuapp.com

#### This is the Hosted link of testing swagger documentation
https://upaged-backend.herokuapp.com/api/documentation

#### This is the Github repository link of the backend challenge 
https://github.com/key-joshua/upaged-backend


<br>

## Features

- Select all jobs.

## Test uPaged Backend APIs

Before we get started Remember to take  :coffee:   :pizza:  and :dancer:  When You Are coding, come on Dude it all about relax

### Backend Tools

 - All Neccessary libraries.
 - Express JS.
 - NodeJs v14.

#### TABLE OF API ENDPOINTS SPECIFICATION AND DESCRIPTION

- Versioning API using URL starts with https://upaged-backend.herokuapp.com/path  


|NO  | VERBS  | ENDPOINTS                            | STATUS  | ACCESS  | DESCRIPTION          |
|----|--------|--------------------------------------|---------|---------|----------------------|
| 1  | GET    | /api/jobs/select-jobs?page=1&limit=1 | 200 OK  | public  | select all jobs      |

#### Other Tools

Other tools and technologies used in development of this application are;
- Hosting: [Heroku](https://heroku.com/).
- Compiler: [Babel](https://babeljs.io/).
- Style Guide: [Airbnb](https://airbnb.io/projects/javascript/).
- Framework: [ExpressJS](http://expressjs.com/).
- Documentation: [Swagger](https://swagger.io/).
- Linting Library: [ESLint](https://eslint.org/).
- API Testing environment: [Postman](https://www.getpostman.com).
- Programming language: [JavaScript(ES6)](https://developer.mozilla.org/en-US/docs/Web/JavaScript/).
- Text Editor: [VSCode](https://code.visualstudio.com), [Sublime Text](https://www.sublimetext.com/).

## GETTING TEST WITH PROJECT GLOBALLY

- [API Swagger Documentation](https://upaged-backend.herokuapp.com/api/documentation)

## GETTING TEST WITH PROJECT LOCALLY

- Open your Gitbash/cmd and run command below to Clone repository into your local machine:
```
git clone https://github.com/key-joshua/upaged-backend.git
```

- Run command below to dive into cloned repository in your local machine:
```
cd upaged-backend
```

- Install the required dependencies found in package.json by running this command:
```
npm install
```
- Setup well and carefully a file called  ```.env``` file before running the application

- And then to start running  this project on your machine , run this command:
```
npm run start
 ```

- then to run test, run this commands:
```
npm run kill
```
```
npm run test
```