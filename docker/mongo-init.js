const DB_NAME = "app";

db.createUser({
  user: "user",
  pwd: "pass",
  roles: [
    {
      role: "readWrite",
      db: DB_NAME,
    },
  ],
});

db = db.getSiblingDB(DB_NAME);
db.createCollection("greetings", { capped: false });
db.greetings.insert({
  lang: "en",
  word: "Hello",
});
db.greetings.insert({
  lang: "vi",
  word: "Xin chào",
});
