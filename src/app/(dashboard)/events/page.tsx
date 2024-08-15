import Link from "next/link"
import { prisma } from "../../../../lib/prisma"
import { EventCard } from "../../../../components/EventCard"


const getData = async () => {
    const events = await prisma.event.findMany({})

    return events
}

export default async function EventsPage() {
    const events = await getData()
    return (
    <div className="w-screen h-screen bg-black text-white flex flex-col items-center">
        <h2 className="text-4xl">Our Events</h2>
        <Link href={"/events/create"}>Create New Event</Link>
        <div className="flex mt-10">
            {events.map(event => (
                <EventCard key={event.id} event={event} />
            ))}
        </div>
    </div>
    )
}