import mongoose from "mongoose";

const userdb = process.env.USER_DB || "root";
const passdb = process.env.PASS_DB || "";

const connectDB = async () => {
  try {
    await mongoose.connect(
      `mongodb://${userdb}:${passdb}@localhost:27017/myapp?authSource=admin`
    );
    console.log("[+] Database connected");
  } catch (err) {
    console.error("[!] Error at connect to database:", err.message);
  }
};

export default connectDB;
