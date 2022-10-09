import mongoose from "mongoose";

const schema = new mongoose.Schema(
	{
		userId: {
			type: String,
			unique: true,
			required: true,
		},
		notificationEnabled: {
			type: Boolean,
			default: false,
		},
		notificationEmail: {
			type: String,
			default: "",
		},
	},
	{
		timestamps: true,
	}
);

const user = mongoose.model("user", schema);
export default user;
