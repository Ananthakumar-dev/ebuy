import { model, Schema, models } from "mongoose";

import bcrypt from "bcryptjs";

interface IntUser {
  name: string;
  email: string;
  password: string;
  avatar?: string;
  dob?: Date;
  role: string;
  country: string;
  phoneCode: string;
  phone: string;
}

const userSchema = new Schema<IntUser>(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },
    email: {
      type: String,
      unique: true,
    },
    password: {
      type: String,
      minlength: 6,
      maxlength: 12,
      select: false,
    },
    avatar: String,
    dob: Date,
    role: {
      type: String,
      enum: {
        values: ["buyer", "seller", "admin"],
        message:
          "Roles validation failed. The values must be in user or merchant or admin. But got `{VALUE}`",
      },
      default: "user",
    },
    country: {
      type: String,
      required: true,
    },
    phoneCode: String,
    phone: String,
  },
  { timestamps: true }
);

userSchema.pre("save", async function (next): Promise<void> {
  try {
    const saltRounds: number = Number(process.env.BECRYPT_SALT);
    if (!saltRounds)
      throw new Error("salt rounds does not exists. Please check env");

    const salt = await bcrypt.genSalt(saltRounds);
    this.password = await bcrypt.hash(this.password, salt);
    next();
  } catch (err: any) {
    next(err.message);
  }
});

const User = models.User || model<IntUser>("User", userSchema);

export default User;
