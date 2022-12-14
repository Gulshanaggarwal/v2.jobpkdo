import mongoose from "mongoose";

const schema = new mongoose.Schema(
	{
		userId: {
			type: String,
			required: true,
		},
		tweetId: {
			type: String,
			required: true,
		},
		applyUrl: {
			type: String,
			required: true,
		},
		isDeleted: {
			type: Boolean,
			default: false,
		},
	},
	{
		timestamps: true,
	}
);

const bookmark = mongoose.model("bookmark", schema);
export default bookmark;
