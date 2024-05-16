const express = require("express");
const { Pool } = require("pg");
const cors = require("cors");

const app = express();

app.use(express.json());
app.use(cors());

const pool = new Pool({
  user: "postgres",
  password: "password",
  host: "postgres",
  port: 5432,
  database: "practice",
});

app.get("/hello-world", async (_req, res) => {
  res.send("hello world na!");
});

app.get("/data", async (_req, res) => {
  try {
    const { rows } = await pool.query("SELECT * FROM test_database");

    res.json(rows);
  } catch (error) {
    res.send(error);
  }
});

app.listen(8080, () => {
  console.log(`Server is listening on port 8080`);
});
