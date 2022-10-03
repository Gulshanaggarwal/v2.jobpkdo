import express from "express";
import connectDB from "./config/db";
import routes from "./routes";

const app = express();
const PORT = process.env.PORT || 5000;

app.use("/api", routes);

app.use("*", (req, res) => {
	res.status(404).json({ message: "404 not found!" });
});

connectDB();

app.listen(PORT, () => console.log(`Server is listening at PORT ${PORT}`));
