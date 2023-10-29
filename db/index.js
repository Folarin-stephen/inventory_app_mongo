const mongoose = require('mongoose');
const dotenv = require('dotenv');

dotenv.config()


const connect = async (uri) => {
    mongoose.connect(uri || process.env.MONGODB_URL2 ||process.env.MONGODB_URL)

    mongoose.connection.on("connected", () => {
        console.log("Connected to MongoDB Successfully");
    });

    mongoose.connection.on("error", (err) => {
        console.log("An error occurred while connecting to MongoDB");
        console.log(err);
    });
}

module.exports = {
    connect
};