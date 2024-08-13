import Link from "next/link"

export default function EventsPage() {
    return (
    <div className="w-screen h-screen bg-black text-white">
        <h2>Events</h2>
        <p>Testing all events</p>
        <Link href={"/events/create"}>New Event</Link>
    </div>
    )
}