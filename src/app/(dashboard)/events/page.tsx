import Link from "next/link"
import { prisma } from "../../../../lib/prisma"
import { EventCard } from "../../../../components/EventCard"
import { auth, currentUser } from "@clerk/nextjs/server"


const getData = async () => {
    const events = await prisma.event.findMany({
        orderBy: [
            {
                date: "desc"
            }
        ]
    })

    return events
}
const getUserInfo = async () => {
    const {userId} = auth()

    const currentUser = await prisma.user.findUnique({
        where: {
            clerkId: userId
        }
    })
    return currentUser
 }

export default async function EventsPage() {
    const events = await getData()
    const user = await getUserInfo()
    return (
    <div className="w-screen h-screen bg-black text-white flex flex-col items-center">
        <h2 className="text-4xl">Our Events</h2>
        {user?.role === 'ADMIN' && 
        <Link href={"/events/create"}>Create New Event</Link>
    }
        <div className="flex mt-10 flex-wrap mx-3.5 justify-center">
            {events.map(event => (
                <EventCard key={event.id} event={event} />
            ))}
        </div>
    </div>
    )
}