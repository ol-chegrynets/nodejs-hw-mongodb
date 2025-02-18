import { model, Schema } from 'mongoose';

const usersSchema = new Schema(
  {
    name: { type: String, required: true },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    createdAt: { type: Date, required: false },
    updatedAt: { type: Date, required: false },
  },
  { timestamps: true, versionKey: false },
);

export const UsersCollection = model('users', usersSchema);
