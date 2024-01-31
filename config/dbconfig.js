const mongoose = require('mongoose');
const dotenv = require('dotenv');

dotenv.config();

const connectDB = async () => {
    try {
        await mongoose.connect(process.env.DATABASE_URI, {
            // useNewUrlParser: true,
            // useUnifiedTopology: true
        });
        console.log("MongoDB Connected...");
    } catch (err) {
        console.error("MongoDB Connection Error:", err);
    }
};

module.exports = connectDB;