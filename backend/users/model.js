"use strict";

const database = require("../database");
const SQL = require("pg-template-tag").default;
const createTable = () => {
  database.query(`
  CREATE TABLE IF NOT EXISTS
    users
    (
      id SERIAL PRIMARY KEY NOT NULL,
      first_name VARCHAR(30) NOT NULL,
      last_name VARCHAR(30)  NOT NULL,
      login VARCHAR(30) NOT NULL,
      password VARCHAR(100) NOT NULL
    );
`);
};

const insert = data => {
  database.query(SQL`
  INSERT INTO users (
    first_name ,
    last_name ,
    login ,
    password
  ) VALUES (
    ${data.first_name} ,
    ${data.last_name} ,
    ${data.login} ,
    ${data.password}
    )
  `);
};

const getUserById = (login, password) =>
  database.query(SQL`
  SELECT
  *
  FROM
  users
  WHERE
  login = ${login}
  AND password=${password}
  `);

// const checkUser = (login, password) =>
//   database.query(SQL`

//     SELECT
//     *
//     FROM
//     users
//     WHERE

//     login = ${login} AND password = ${password};

//     `);

// const getUserByName = name =>
//   database.query(SQL`

//     SELECT
//     *
//     FROM
//     users
//     WHERE
//     login = ${name}
//     `);

module.exports = {
  createTable,
  insert,
  getUserById
  // getUserByName,
  // checkUser
};
