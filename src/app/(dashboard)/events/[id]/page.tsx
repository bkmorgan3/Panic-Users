import Link from "next/link"
import { prisma } from "../../../../../lib/prisma"

const getUsersFromEvent = async (id: string) => {
    console.log("fetch", id)
    const event = await prisma.user.findMany({
        where: {
            eventId: id
        }
    })
    return event
}

const getEventData = async (id: string) => {
    const event = await prisma.event.findUnique({
        where: {
            id
        }
    })
    return event
}

export default async function EventPage({params}) {
   const {id} = params
    const users = await getUsersFromEvent(id)
    const eventData = await getEventData(id)
    return (
        <div className="text-center">
            <h2 className="text-2xl mb-4">{eventData.name}</h2>

            <div>
                <p className="mb-10">Maybe this section should be a little blurb or something about the event</p>

                <h2 className="text-2xl mb-2">Attendees</h2>
                {users.map((user) => (
                    <div>
                        <Link href={`/users/${user.id}`}>
                            <p>{user.name}</p>
                        </Link>
                    </div>
                ))}
            </div>
        </div>
    )
}