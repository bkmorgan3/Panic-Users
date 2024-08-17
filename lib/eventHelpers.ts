import { prisma } from "../lib/prisma";

export const insertEvent = async(data) => {
    try {
        const event = await prisma.event.create({
            
                data: {
                    name: data.name,
                    address: data.address,
                    address2: data.address2,
                    city: data.city,
                    state: data.state,
                    date: new Date(data.date),
                  
                }
            })
            return event
    } catch(e) {
        console.log(e)
    }
}

export const insertUser = async(data) => {
    console.log("DATA", data)
    try {
        await prisma.user.create({
            data: {
                dogName: data.petname,
                name: data.name,
                phone: data.phone,
                breedAndColor: data.breed,
                email: data.email,
                wantsPrints: 'No',
                clerkId: data.clerkId
            }
        })
    } catch(e) {
        console.log(e)
    }
}