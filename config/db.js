import mongoose from "mongoose";


const setupMongoose = () => {
    mongoose.connect(process.env.MONGO_URL)
        .then(() => console.log('MongoDB connected'))
        .catch(err => console.error(err));
}

export default setupMongoose;