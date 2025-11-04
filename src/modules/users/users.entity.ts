import mongoose, { Schema, Document } from 'mongoose';


export interface IUser extends Document {
  name: string;
  email: string;
  age?: number;
  createdAt: Date;
}

const userSchema = new Schema<IUser>({
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    age: { type: Number },
    createdAt: { type: Date, default: Date.now }
  });

  export const User = mongoose.model<IUser>('User', userSchema);
