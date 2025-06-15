import express from "express";
import router from "./Routes/ContectRoute";
import cors from "cors";

const app = express();
app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.status(200).json({
    Message: "hye i am route",
  });
});

app.use("/api", router);

app.listen(8080, () => {
  console.log("listing port at 8080");
});
