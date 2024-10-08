import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  auth0Id: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  name: {
    type: String,
  },
  Institute: {
    type: String,
  },
  city: {
    type: String,
  },
  branch: {
    type: String,
  },
});

const User = mongoose.model("User", userSchema);
export default User;
