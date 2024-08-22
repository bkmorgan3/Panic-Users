import Link from "next/link"

export const EventCard = ({event}) => {
    
    return (
        <div className="w-[250px] h-[250px] border-2 border-sky-500 mx-3.5 mt-2 p-2">
            <Link href={`/events/${event.id}`}><span>{event.name}</span></Link>
            <span>{event.address}</span>
            <span>{event.address2}</span>
            <span>{event.city}</span>
            <span>{event.state}</span>
            {/* <span>{event.date}</span> */}
        </div>
    )
}