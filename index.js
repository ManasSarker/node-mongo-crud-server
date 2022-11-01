const express = require("express");
const { MongoClient, ServerApiVersion } = require("mongodb");
const cors = require("cors");
require("colors");
const app = express();

const port = process.env.PORT || 5000;

//middle were
app.use(cors());
app.use(express.json());

const uri =
  "mongodb+srv://dbUser:9LnMEthdfIo9bqWF@cluster0.1bfnzye.mongodb.net/?retryWrites=true&w=majority";
const client = new MongoClient(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  serverApi: ServerApiVersion.v1,
});
async function run() {
  try {
    const userCollection = client.db("nodeMongoCrud").collection("users");
    app.post("/users", async (req, res) => {
      const user = req.body;

      const result = await userCollection.insertOne(user);
      console.log(result);
    });
  } finally {
  }
}
run().catch((error) => console.error(error.name, error.message));

app.get("/", (req, res) => {
  res.send("Hello from node mongo crud server in ");
});

app.listen(port, () => {
  console.log("this is running in ".cyan.bold, port);
});
//pass : 9LnMEthdfIo9bqWF
