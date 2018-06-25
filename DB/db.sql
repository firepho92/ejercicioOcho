CREATE DATABASE traductor;

USE traductor;

CREATE TABLE traducciones(
  espaniol VARCHAR(20) NOT NULL,
  ingles VARCHAR(20) NOT NULL,
  frances VARCHAR(20) NOT NULL,
  PRIMARY KEY(espaniol)
);
