'use server'
import { prisma } from "../lib/prisma";
import { z } from "zod";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { insertEvent } from "../lib/eventHelpers";

const projectSchema = z.object({
    name: z.string(),
    address: z.string(),
    address2: z.string().optional(),
    city: z.string(),
    state: z.string().max(2),
    date: z.string().date()
    
})

export const createEvent = async(prevState: any, formData: FormData) => {
    const data = projectSchema.parse({
        name: formData.get("name"),
        address: formData.get("address"),
        address2: formData.get("address2"),
        city: formData.get("city"),
        state: formData.get("state"),
        date: formData.get("date"),
    })
   
    try {
        const event = await insertEvent(data)
    } catch(e) {
        console.log(e)
        return {message: "failed to create event"}
    }

    revalidatePath("/events")
    redirect("/events")
}