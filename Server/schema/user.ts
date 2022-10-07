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
		notificationInterval: {
			type: String,
			default: "0.5",
		},
	},
	{
		timestamps: true,
	}
);

const user = mongoose.model("user", schema);
export default user;
