import express from "express";
import dotenv from "dotenv";
import { mongoose } from "@typegoose/typegoose";
import FileUpload from "express-fileupload";
import cors from "cors";
import { errorHandler } from "./utils/middleware/errorHandler";

const mainRoutes = require("./mainRoutes.routes");

dotenv.config();
const app = express();
const port = process.env.PORT;
app.use(FileUpload({ useTempFiles: true }));
app.use(cors());

app.use(express.json({ limit: "5000mb" }));




// ############### === DB CONNECTION === ########################
mongoose.set("strictQuery", true);

mongoose
  .connect(process.env.DATABASEURL ?? "")
  .then(() => {
    console.log("Connected to database!");
  })
  .catch((error) => {
    console.log("Connection failed!", error);
  });

// ############### === DB CONNECTION END === ########################



app.use("/api", mainRoutes);
app.use(errorHandler)

// Status Check
app.get("/", (req, res) => {
  res.send("Serving on port" + port);
});

app.listen(port, () => {
  console.log(`[server]: Server is running at http://localhost:${port}`);
});
