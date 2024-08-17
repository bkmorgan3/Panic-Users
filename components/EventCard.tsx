

export const EventCard = ({event}) => {
    return (
        <div className="w-[250px] h-[250px] border-2 border-sky-500 mx-3.5 mt-2 p-2">
            <span>{event.name}</span>
        </div>
    )
}