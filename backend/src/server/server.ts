import mongoose from 'mongoose';

async function connectToDatabase() {
  try {
    await mongoose.connect('mongodb://127.0.0.1:27017/nutrition');
    console.log('Connected to the database successfully!');
  } catch (error) {
    console.error(error);
    console.log("Unable to connect to the database\n")
    process.exit(1);
  }
}

export default connectToDatabase;
