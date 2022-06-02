import mongoose from "mongoose";

const { connect } = mongoose;

export const connectToDatabase = () => {
  connect("mongodb://localhost:27017/footpalace-db", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
    .then(() => console.log(`MongoDB CONNECTED`))
    .catch((error) =>
      console.log(`Error when trying connection with MongoDB, Error: ${error}`)
    );
};
