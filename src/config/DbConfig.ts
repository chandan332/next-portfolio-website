import mongoose, { connect } from "mongoose";

/**
 * Connects to a MongoDB database using Mongoose.
 *
 * @param callback - A callback function to be executed after the database connection is established.
 * @returns A promise that resolves with the result of the callback function or an error message if there was an error connecting to the database or executing the callback function.
 */
export async function connectDb(callback: () => any) {
  let result;
  try {
    await mongoose.connect(process.env.MONGO_URI!);
    console.log("Connection established");

    mongoose.connection.on("error", (error) => {
      console.log("Error: " + error);
    });

    mongoose.connection.on("close", (err) => {
      console.log("closed connection");
    });

    result = await callback();
  } catch (error) {
    result = "Error connecting to database: " + error;
  } finally {
    mongoose.connection.close();
    return result;
  }
}
