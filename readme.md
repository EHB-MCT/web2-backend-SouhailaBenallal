# University Web
I would like to make a website where you can find all the universities in Belgium.
My site will be designed in a lucrative way to allow the young student to find the university that inspires him the most. 
My site will be for all the people who want to resume their studies. And that it is difficult to find universities near your home!
He could create his own account to keep all these universities "liked". 


## Installation
Use the package manager [npm](https://docs.npmjs.com/c/v8/commands/npm-init) to install nodemes.

```bash
npm install
```
## Used Packages
This module enables storing of passwords as hashed passwords instead of plaintext. 
[Bcryptjs](https://www.npmjs.com/package/bcryptjs)
```bash
npm i bcryptjs
```


The bodyParser object exposes various factories to create middlewares. 
[Body-parser](https://www.npmjs.com/package/body-parser)
```bash
npm i body-parser
```


CORS is a node.js package for providing a Connect/Express middleware that can be used to enable CORS with various options. 
[Cors](https://www.npmjs.com/package/cors)
```bash
npm i cors
```

Dotenv is a zero-dependency module that loads environment variables from a .env file into process.env. Storing configuration in the environment separate from code is based on The Twelve-Factor App methodology. 
[Dotenv](https://www.npmjs.com/package/dotenv)
```bash
npm i dotenv
```

Express is a node js web application framework that provides broad features for building web and mobile applications. 
[Express](https://www.npmjs.com/package/express)
```bash
npm i express
```

JWT, or JSON Web Token, is an open standard used to share security information between two parties — a client and a server. 
[Jsonwebtoken](https://www.npmjs.com/package/jsonwebtoken)
```bash
npm i jsonwebtoken
```


The official MongoDB driver for Node.js. 
[Mongodb](https://www.npmjs.com/package/mongodb)
```bash
npm i mongodb
```


nodemon is a tool that helps develop Node.js based applications by automatically restarting the node application when file changes in the directory are detected. 
[Nodemon](https://www.npmjs.com/package/nodemon)
```bash
npm i nodemon
```

## DOC API Source
 ### - Commenents
 GET /comments - Get all comments/

 GET /comments?id=1234 - Get the comments with ID 1234/

 POST /save comments - saves the comments in local file/

 PUT /comments?id=1234 - update the comments with ID 1234/

 DELETE /delete comments - delete the comments in local file/


### - University
 GET / - University/

 GET /University - Get all University/

 GET /University?id=1234 - Get the University with ID 1234/
 
 POST /save University - saves the University in local file/
 
 PUT /University?id=1234 - update the University with ID 1234/
 
 DELETE /delete University - delete the University in local file/


### - Wishlist
 GET / - Wishlist/

 GET / Wishlist?id=1234 - Get the Wishlist with ID 1234/

 POST /save Wishlist - saves the Wishlist in local file/

 DELETE /delete Wishlist - delete the Wishlist in local file/

### - Users
 GET /users -

 GET /users/me (verifyToken) - 

 POST /login -

 POST /register -

 PUT /users/:id (verifyToken)-

 DELETE /users/:id (verifyToken)-


## Sources WEB
https://docs.npmjs.com/cli/v8/commands/npm-init

https://www.makeareadme.com/

https://towardsdatascience.com/build-a-rest-api-with-node-express-and-mongodb-937ff95f23a5

https://dev.to/andrewbaisden/creating-mern-stack-applications-2020-4a44

https://courses.learncodeonline.in/learn/Full-Stack-web-development-with-NodeJS-and-MongoDB

https://www.npmjs.com/package/nodemon

https://www.npmjs.com/package/eslint

https://jasonwatmore.com/post/2018/06/14/nodejs-mongodb-simple-api-for-authentication-registration-and-user-management

https://www.youtube.com/watch?v=CyTWPr_WwdI

https://morioh.com/p/956f56eb74f1

https://medium.com/geekculture/building-an-api-using-express-js-and-mongodb-wishlist-api-application-1aa3215fde6d

https://medium.com/zero-equals-false/building-a-restful-crud-api-with-node-js-jwt-bcrypt-express-and-mongodb-4e1fb20b7f3d

## Sources School
Mike Derycke (WEB2)
