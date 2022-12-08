import express from "express";
import bodyParser from "body-parser";
import connectDB from "./config/db";
import authMiddleware from "./middlewares/auth";
import routes from "./routes";
import cors from "cors";

const app = express();
const PORT = process.env.PORT || 5000;

const whiteList = ["https://jobpkdo.vercel.app"];

const corsOptionsDelegate = function (
	req: any,
	callback: (arg0: null, arg1: { origin: boolean }) => void
) {
	let corsOptions;
	if (whiteList.indexOf(req.header("Origin")) !== -1) {
		corsOptions = { origin: true }; // reflect (enable) the requested origin in the CORS response
	} else {
		corsOptions = { origin: false }; // disable CORS for this request
	}
	callback(null, corsOptions); // callback expects two parameters: error and options
};

app.use(cors(corsOptionsDelegate));
app.use(bodyParser.json());
app.use(authMiddleware); //auth middleware
app.use("/api", routes);

app.use("*", (req, res) => {
	res.status(404).json({ message: "404 not found!" });
});

connectDB();

app.listen(PORT, () => console.log(`Server is listening at PORT ${PORT}`));
