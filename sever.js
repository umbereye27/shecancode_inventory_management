const express = require('express');

const app = express();
app.use(express.json());

mongoose
  .connect(process.env.DB)
  .then(() => console.log("DB connected Successfully!"))
  .catch((err) => console.log("error!", err));
app.use(cors());
app.get("/", (req, res) => {
  res.send("welcome");
});
app.listen(8000,()=>console.log("sever starts listening on 800"))