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
        <div>
            <h2>{eventData.name}</h2>
        </div>
    )
}