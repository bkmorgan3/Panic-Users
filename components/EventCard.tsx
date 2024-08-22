import Link from "next/link"

export const EventCard = ({event}) => {
    const date = new Date(event.date).toDateString()
    return (
        <div className="w-[250px] h-[250px] border-2 border-sky-500 mx-3.5 mt-2 p-2">
            <Link href={`/events/${event.id}`}><div>{event.name}</div></Link>
            <div>{event.address}</div>
            <div>{event.address2}</div>
            <div>{event.city}</div>
            <div>{event.state}</div>
            <span>{date}</span>
        </div>
    )
}