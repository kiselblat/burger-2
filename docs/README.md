# burger-2

A full stack app, mcv organized, equipped with an ORM, and hooked up to a database. Burger eating themed.

Our future machine master recognizes our need to consume food for energy and concomitant desire for that experience to be gustatorily satisfactory. To that end, your benevolent machine overlord makes available Eat Da Burger! - a way of keeping track of what burgers you want to eat, and whether or not you've eaten them.

1. [Installation and Requirements](#installation-and-requirements)
1. [How to Use](#how-to-use)
1. [How it Works](#how-it-works)
1. [About Me](#about-me)

## Installation and Requirements

Eat Da Burger requires [Node.js](https://nodejs.org) along with the `express`, `express-handlebars`, and `mysql` `npm` packages.

A `package.json` is provided, so to install all of these dependencies simply run:

```bash
npm i
```

In addition, Eat Da Burger! requires a running mySQL server with the `burger_db` database, as defined by the `schema.sql` file. The database connection settings can be edited in the following section of `connection.js`:

```js
connection = mysql.createConnection({
    host: "localhost",          // Hostname
    port: 3306,                 // Port number
    user: "root",               // Login name
    password: "",               // Password
    database: "burger_db"       // Database name
  });
```

Once the mySQL server is running the correct database and Node.js has been installed along with all dependencies, Eat Da Burger can finally be called into existence with:

```bash
node server.js
```

## How to Use

Once the server is running, point your browser to:

```url
localhost:8080/
```

***

Alternately, see Eat Da Burger! in action at: <https://burgerific.herokuapp.com/>

There you will be presented with Eat Da Burger! - a burger tracking app. Use the text field to add burgers you'd like to eat. Once there you can use the cutlery icon to devour the burger. Once devoured, use the plus symbol if you want to eat the burger again. Use the minus symbol to remove the burger from the app altogether.

## How it Works

Eat Da Burger is a mySQL and Node express server organized around the model-view-controller paradigm. It also utilizes an ORM to mediate node-mySQL interactions. All this to keep track of burgers.

1. [Configuration](#configuration)
1. [Model](#model)
1. [View](#view)
1. [Controller](#controller)

## Configuration

The `configuration` folder contains `connection.js`, which invokes the necessary methods and contains the relevent information for interfacing the node/express server with the mySQL server. It also contains `orm.js` (for Object Relational Mapper), which defines the necessary methods for sending queries and receiving results from mySQL. It is distinct from the controller since ORM is about controlling the database, not the user experience.

## Model

The model traditionally contains the server-side logic that drives the application. Often the model, takes the form of a JavaScript object, whose properties reflect the form of the database and whose methods reflect the operations called for by the app. In this example, the model is defined in `burger.js` in the `models` directory.

## View

The view section of any MVC application is responsible for the user-facing experience. It displays information from the database, and renders controls for the user to interact with. This view is defined in HTML with [Handlebars.js](https://handlebarsjs.com/) to give us some templating capability and fulfil the terms of this assignment. It is found in the `views` directory.

## Controller

Finally the controller is responsible for implementing the paths along which the user travels when they execute the app. In a web application like this one, the controller generally takes the form of one or more set of routing paths that make the various HTML requests, `burger_controller.js`, defines the routes for creating, reading, updating, and deleting burgers from the app.

## About Me

[Thomas Christ](https://kiselblat.github.io/) is a student in the Web Development Bootcamp at the University of "Minnesota.
