#! /usr/bin/env node
require("dotenv").config();
const { Client } = require("pg");

const SQL = `
CREATE TABLE IF NOT EXISTS messages (
  id INTEGER PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
  text VARCHAR(255) NOT NULL,
  username VARCHAR(255) NOT NULL, 
  added TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

INSERT INTO messages (text, username) 
VALUES
  ('Hello, world!', 'Alice'),
  ('Just trying to stay positive!', 'Bob'),
  ('Looking forward to the weekend!', 'Charlie');
`;

async function main() {
  console.log("seeding...");
  const client = new Client({
    ssl: { rejectUnauthorized: false },
    connectionString: process.env.CONNECTION_STRING,
  });
  await client.connect();
  await client.query(SQL);
  await client.end();
  console.log("done");
}

main();
