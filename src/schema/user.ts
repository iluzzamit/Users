import { model, Schema } from "mongoose";
import { User as UserModel } from "../model/user";

const userSchema = new Schema<UserModel>({
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    name: { type: String },
    age: { type: Number },
});

export const User = model<UserModel>('User', userSchema)