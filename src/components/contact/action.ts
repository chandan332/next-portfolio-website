"use server";

import { connectDb } from "@/config/DbConfig";
import { clientModel } from "@/model/data";

export const handleForm = async (data: FormData) => {
  console.log(data.get("name"));
  await connectDb(async () => {
    try {
      await clientModel.create({
        name: data.get("name"),
        email: data.get("email"),
        message: data.get("message"),
      });
      return { message: "sucessfully data saved" };
    } catch (error: any) {
      return { message: error.message };
    }
  });
};
