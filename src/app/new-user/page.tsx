import { prisma } from "../../../lib/prisma"
import { auth, currentUser } from "@clerk/nextjs/server"

const createNewUser = async() => {
    // 1. Look for ClerkID because if there is clerkID there is email.
    // 2. if no clerkid, lookup by email
    // 3. if no email create new user with formData
    //  else update user with clerkId.

    const user = await currentUser()
    console.log(`user ${user?.emailAddresses[0].emailAddress}`)
    const match = await prisma.user.findUnique({
        where: {
            clerkId: user.id as string
        }
    })
    const isReturning = await prisma.user.findUnique({
        where: {
            email: user?.emailAddresses[0].emailAddress
        }
    })
    console.log("MATCH", match)
    if(!match) {
        console.log("no match")
        if(isReturning) {
            console.log(`Returning user needs to have ${user.id} added`)
            await prisma.user.update({
                where: {
                    email: user?.emailAddresses[0].emailAddress
                },
                data: {
                    clerkId: user.id
                }
            })
        }
        // await prisma.user.create({
        //     data: {
        //         clerkId: user?.id,
        //         email: user?.emailAddresses[0].emailAddress
        //     }
        // })
    }
}

export default function Page() {
    createNewUser()
    return 'New User'
}