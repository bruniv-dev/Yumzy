import express from "express";
import cors from "cors";

//app config
const app = express();
const port = 5000;

//middleware
//frontend to backend request will be parsed using json
app.use(express.json());

//can access backend from any frontend
app.use(cors());

//req data from server
app.get("/", (req, res) => {
  res.send("hello from yumzy");
});

app.listen(port, () => {
  console.log(`server started on ${port}`);
});
