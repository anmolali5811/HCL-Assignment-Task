import colors from "colors";
import express from "express";
import dotenv from "dotenv";
import morgan from "morgan";
import cors from "cors";
import routes from "./routes/index.js";
import unknownEndpoint from "./helpers/unknownEndpoint.js";
import { handleError } from "./helpers/error.js";
import connectDatabase from "./config/database.js";

//configure env
dotenv.config();

// database
connectDatabase();

//rest object
const app = express();

//middelwares
app.use(express.json());
app.use(morgan("dev"));
app.use(cors({ credentials: true, origin: true }));
app.use(express.urlencoded({ extended: true }))

// apis
app.use("/" , routes); // without token 
app.get("/", (req, res) =>
  res.send("<h1 style='text-align: center'>HCL Backend API</h1>")
);
app.use(unknownEndpoint);
app.use(handleError);

//PORT
const PORT = process.env.PORT || 8080;

//run listen
app.listen(PORT, () => {
    console.log(
        `Server Running on ${process.env.NODE_ENV} mode on port ${PORT}`.bgCyan
        .white
    );
});