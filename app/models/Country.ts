import { Schema, model, models } from "mongoose";

export interface countryInt {
  countryCode: string;
  countryName: string;
  phoneCode: string;
  checkPattern: string;
}

const countrySchema = new Schema<countryInt>(
  {
    countryCode: {
      type: String,
      required: true,
    },
    countryName: {
      type: String,
      required: true,
      unique: true,
      trim: true,
    },
    phoneCode: {
      type: String,
      required: true,
    },
    checkPattern: {
      type: String,
      required: true,
    },
  },
  { timestamps: false }
);

const Country = models.Country || model<countryInt>("Country", countrySchema);

export default Country;
