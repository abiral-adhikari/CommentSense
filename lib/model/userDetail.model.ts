// models/User.js
import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  image: String,
  firstname: String,
  surname: String,
  emailAddress: String,
  phoneNumber: String,
  address: String,
  country: String,
  education: String,
  dateOfBirth: String,
});

const User = mongoose.models.User || mongoose.model("User", userSchema);

export default User;
