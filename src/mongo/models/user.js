import { Schema, model } from "mongoose";

const collection = "users";
const schema = new Schema({
  email: { type: String, required: true },
  password: { type: String, required: true }
},
  {
    timestamps: true,
  })

const User = model(collection, schema);

export default User;


