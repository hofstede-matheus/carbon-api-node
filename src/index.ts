import express from "express";
import cors from "cors";
import { toCarbonSh } from "./controllers";

const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.json());
app.use(cors());

app.post("/", toCarbonSh);

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
