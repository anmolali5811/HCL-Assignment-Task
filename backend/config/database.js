import mongoose from "mongoose";
const connectDatabase = () => {
  mongoose
    .connect(process.env.MONGODB_URL, 
      { useNewUrlParser: true, useUnifiedTopology: true }
    )
    .then((data) => {
      console.log(`Mongodb connected with server: ${data.connection.host}`);
    }).catch((err) => {
      console.log("Error while connecting with the database", err);
    });
};

export default connectDatabase;