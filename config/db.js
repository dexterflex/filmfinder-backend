import mongoose from "mongoose";


const setupMongoose = () => {
    mongoose.connect(process.env.MONGO_URL || "mongodb+srv://vk281977:jPDElHlz4qUIvE1d@cluster0.ywncs.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0", {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        serverSelectionTimeoutMS: 50000 // Timeout after 5 seconds
    })
        .then(() => console.log('MongoDB connected'))
        .catch(err => console.error(err));
}

export default setupMongoose;