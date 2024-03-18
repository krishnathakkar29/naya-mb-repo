import mongoose, { mongo } from "mongoose";

export const connectDB = async () => {
  const { connection } = await mongoose.connect(`${process.env.MONGO_URL}/mbaBurgerW`);

  console.log(`Database is connected with ${connection.host}`);
};
