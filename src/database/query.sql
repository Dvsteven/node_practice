CREATE DATABASE PruebaNode;

USE PruebaNode;

CREATE TABLE personas(
    id INT AUTO_INCREMENT PRIMARY_KEY,
    name VARCHAR(30) NOT NULL,
    lastname VARCHAR(30) NOT NULL,
    age INT
);

SELECT * FROM personas;