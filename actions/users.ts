'use server'
import { z } from "zod";
import { redirect } from "next/navigation";
import { insertUser } from "../lib/eventHelpers";

const userSchema = z.object({
    name: z.string(),
    petname: z.string(),
    phone: z.string(),
    breed: z.string(),
    email: z.string(),
    clerkId: z.string()
})

export const createUser = async (userEmail:string, formData:FormData) => {

    
    const data = userSchema.parse({
        name: formData.get("name"),
        petname: formData.get("petname"),
        phone: formData.get("petname"),
        breed: formData.get("breed"),
        email: userEmail,
        clerkId: formData.get("clerkId")
    })
    console.log("NEW DATA", data)

    try {
        const user = await insertUser(data)
    } catch(e) {
        console.log(e)
        return {message: "Failed to create user"}
    }
    redirect("/events")
}   