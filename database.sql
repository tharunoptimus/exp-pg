CREATE DATABASE ispshxxv;

-- The database is hosted on Elephant SQL Server with the name ispshxxv
--\c into todo_database

CREATE TABLE todo(
    todo_id SERIAL PRIMARY KEY,
    description VARCHAR(255),
);