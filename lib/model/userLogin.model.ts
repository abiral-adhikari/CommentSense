import mongoose from "mongoose";

const userLoginSchema = new mongoose.Schema({
  username: { type: String, required: true, unique: true },
  email: { type: String, required: true },
  password: { type: String, required: true },
});

const UserLogin =
  mongoose.models.UserLogin || mongoose.model("UserLogin", userLoginSchema);

export default UserLogin;
