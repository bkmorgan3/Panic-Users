import { prisma } from "../lib/prisma";

export const insertEvent = async(data) => {
    console.log("INSERTING")
    try {
        const event = await prisma.event.create({ data })
            return event
    } catch(e) {
        console.log(e)
    }
}