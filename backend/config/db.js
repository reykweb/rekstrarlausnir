import mongoose from 'mongoose';

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_LOCAL, {
      useUnifiedTopology: true,
      useNewUrlParser: true,
      useCreateIndex: true
    });
    console.log(`MongoDB Connected: ${conn.connection.host}`.green.underline)
  } catch(error){
    console.error(`Error: ${error.message}`.red.underline.bold);
    process.exit(1);
  }
}

export default connectDB;