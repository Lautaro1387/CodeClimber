CREATE DATABASE IF NOT EXISTS codeclimber;
USE codeclimber;
CREATE TABLE IF NOT EXISTS users (
    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    username VARCHAR(40) NOT NULL,
    password VARCHAR(256) NOT NULL,
    points INT DEFAULT 0,
    medals INT DEFAULT 0,
    email VARCHAR(50) NOT NULL
);

CREATE TABLE IF NOT EXISTS ranking (
    id INT NOT NULL AUTO INCREMENT FOREIGN KEY,
    username VARCHAR(40) NOT NULL,
    points INT DEFUALT 0,
    medals INT DEFAULT 0
);

