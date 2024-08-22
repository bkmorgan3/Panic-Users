'use client'
import { useFormState } from "react-dom";
import { createEvent } from "../../../actions/events";

const initState = {message: null}

const NewEventForm = () => {

    const [formState, action] = useFormState<{message: string | null}>(createEvent,initState )

    return (
        <form action={action} className="flex flex-col mx-auto w-[500px] mt-20 items-center gap-y-2 border-2 border-zinc-50 rounded" >
            <h3>Create New Event</h3>
            <input className="text-black" name="name" required placeholder="name" type="text" />
            <input className="text-black" type="text" name="address" placeholder="address" />
            <input className="text-black" type="text" name="address2" placeholder="address line2" />
            <input className="text-black" type="text" name="city" placeholder="city" />
            <input className="text-black" type="text" name="state" placeholder="state" />
            <input className="text-black" type="date" name="date" placeholder="date" />
            <button className="border border-sky-500" type="submit">Create Event</button>
            {formState?.message && <p>{formState.message}</p>}
        </form>
    )
}

export default NewEventForm