import mongoose from 'mongoose';
import User from '../models/User';
import dotenv from 'dotenv';

dotenv.config();

const mongoURI = process.env.MONGO_URI || 'mongodb://127.0.0.1:27017/blog';

mongoose.connect(mongoURI)
  .then(async () => {
    console.log('Connected to MongoDB');

    const username = 'admin3';
    const password = 'kirekhar';

    const existingUser = await User.findOne({ username });
    if (existingUser) {
      console.log(`${username} Admin user already exists`);
    } else {
      const newAdmin = new User({ username, password });
      await newAdmin.save();
      console.log('Admin user created successfully');
    }

    mongoose.connection.close();
})
.catch((err: Error) => console.error('MongoDB connection error:', err));
