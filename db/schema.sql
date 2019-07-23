### Schema

DROP DATABASE IF EXISTS burger_db;

CREATE DATABASE burger_db;
USE burger_db;

CREATE TABLE burgers
(
	id int NOT NULL AUTO_INCREMENT,
	burger_name VARCHAR(255) NOT NULL DEFAULT 'Burger',
	devoured BOOLEAN DEFAULT 0,
	PRIMARY KEY (id)
);