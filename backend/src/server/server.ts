import dotenv from 'dotenv'
import mongoose from 'mongoose';

dotenv.config()

async function connectToDatabase() {

  const mongodb_uri = process.env.MONGODB_URI
  if (!mongodb_uri) {
    process.exit(1)
  }
  
  try {
    await mongoose.connect(mongodb_uri);
    console.log('Connected to the database successfully!');
  } catch (error) {
    console.error(error);
    console.log('Unable to connect to the database\n');
    process.exit(1);
  }
}

export default connectToDatabase;
