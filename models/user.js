import { Schema, model, models } from "mongoose";

const UserSchema = new Schema({
  name: String,
  title: String,
  age: Number,
  gender: String,
  phoneNumber: String,
  email: String,
  address: String,
});

const User = models.User || model("User", UserSchema);

export default User;
