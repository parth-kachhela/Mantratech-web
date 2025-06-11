import express from "express";
const app = express();

app.get("/", (req, res) => {
  res.status(200).json({
    Message: "hye i am route",
  });
});
app.listen(8080, () => {
  console.log("listing port at 8080");
});
