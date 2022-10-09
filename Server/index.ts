import express from "express";
import bodyParser from "body-parser";
import connectDB from "./config/db";
import authMiddleware from "./middlewares/auth";
import routes from "./routes";

const app = express();
const PORT = process.env.PORT || 5000;

app.use(bodyParser.json());
app.use(authMiddleware); //auth middleware
app.use("/api", routes);

app.use("*", (req, res) => {
	res.status(404).json({ message: "404 not found!" });
});

connectDB();

app.listen(PORT, () => console.log(`Server is listening at PORT ${PORT}`));
