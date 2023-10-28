import { Schema, model, models } from "mongoose";

const clientSchema = new Schema({
  name: { type: String, require: true },
  email: { type: String, require: true },
  message: { type: String, require: true },
});

export const clientModel = models.Client || model("Client", clientSchema);
