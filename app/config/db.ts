import mongoose from "mongoose";

const connect = async () => {
  const mongourl = process.env.MONGO_URL;
  if (!mongourl) throw new Error("Mongo url not found. Please check env!");

  try {
    await mongoose.connect(mongourl);
  } catch (err: any) {
    const env = process.env.APP_ENV || "local";
    throw new Error(env === "local" ? err.message : "Something went wrong");
  }
};

export default connect;
