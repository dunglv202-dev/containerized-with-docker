const express = require("express");
var cors = require("cors");
const { MongoClient } = require("mongodb");

/* == APP == */
const PORT = 3001;

/* == DB == */
const MONGO_USER = process.env.MONGO_USER;
const MONGO_PASS = process.env.MONGO_PASS;
const MONGO_DB = process.env.MONGO_DB;
const MONGO_URL = `mongodb://${MONGO_USER}:${MONGO_PASS}@db:27017/?authMechanism=DEFAULT&authSource=${MONGO_DB}`;

/* == APP INITIALIZATION == */
const app = express();
const client = new MongoClient(MONGO_URL);
app.use(cors());
app.use(express.json());

app.get("/hello", async (req, res) => {
  try {
    await client.connect();
    const db = client.db(MONGO_DB);
    const greetings = db.collection("greetings");
    const result = await greetings.findOne({ lang: req.query.lang === "vi" ? "vi" : "en" });

    res.send(result.word + ", " + req.query.name + "!");
  } catch (e) {
    console.log(e);
    res.send(e.message);
  } finally {
    await client.close();
  }
});

app.listen(PORT, (error) => {
  if (!error) console.log("Server is running at port" + PORT);
  else console.log("Error occurred, server can't start", error);
});
