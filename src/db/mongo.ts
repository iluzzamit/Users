import mongoose from 'mongoose';

// Connection URL
const URL = 'mongodb://localhost:27017/default_db';

export async function connect() {
    return mongoose.connect(URL);
}