import NewUserForm from "../../../components/NewUserForm"
import { prisma } from "../../../lib/prisma"
import { auth, currentUser } from "@clerk/nextjs/server"

const addClerkId = async() => {
    // 1. Look for ClerkID because if there is clerkID there is email.
    // 2. if no clerkid, lookup by email

    const user = await currentUser()
    // Find a user by clerkId
    const match = await prisma.user.findUnique({
        where: {
            clerkId: user.id as string
        }
    })
    console.log(match)

    const isReturning = await prisma.user.findUnique({
        where: {
            email: user?.emailAddresses[0].emailAddress
        }
    })
    if(!match) {
        // Attach ClerkID to existing User
        if(isReturning) {
            await prisma.user.update({
                where: {
                    email: user?.emailAddresses[0].emailAddress
                },
                data: {
                    clerkId: user.id
                }
            })
        }
    }
    return user
}

export default async function Page() {
    const user = await addClerkId()
    return (
        <NewUserForm clerkId={user?.id} userEmail={user?.emailAddresses[0].emailAddress} />
    )
}