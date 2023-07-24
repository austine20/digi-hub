import mongoose from "mongoose";

const connect = async () => {
  try {
    await mongoose.connect(
      "mongodb+srv://austineDev:austineDev@cluster0.9pvf0ax.mongodb.net/blogs?retryWrites=true&w=majority"
    );
  } catch (error) {
    throw new Error("Connection failed!");
  }
};

export default connect;
