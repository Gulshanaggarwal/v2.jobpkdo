import mongoose from "mongoose";

const jobSchema = new mongoose.Schema({
	tweetId: {
		type: String,
		required: true,
		unique: true,
	},
});

const schema = new mongoose.Schema({
	userId: {
		type: String,
		required: true,
		unique: true,
	},
	jobs: {
		type: [jobSchema],
		required: true,
	},
});

const dailyMailReminder = mongoose.model("dailyMailReminder", schema);

export default dailyMailReminder;
