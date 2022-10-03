import mongoose, { ConnectOptions } from "mongoose";
import "dotenv/config";

const connectDB = () => {
	mongoose
		.connect(`${process.env.DB_URL}`, {
			useNewURLParser: true,
			useUnifiedTopology: true,
		} as ConnectOptions)
		.then(() => console.log("We are ready with database"))
		.catch((err) => console.log(`Database connection error ${err}`));
};

export default connectDB;
