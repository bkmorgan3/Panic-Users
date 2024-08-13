'use client'
import { useFormState } from "react-dom";
import { createEvent } from "../../../actions/events";

const initState = {message: null}

const NewEventForm = () => {

    const [formState, action] = useFormState<{message: string | null}>(createEvent,initState )

    return (
        <form style={{border: '1px solid red'}} action={action} className="flex flex-col mx-auto" >
            <h3>Create New Event</h3>
            <input name="name" required placeholder="name" type="text" />
            <input type="text" name="address" placeholder="address" />
            <input type="text" name="city" placeholder="city" />
            <input type="text" name="state" placeholder="state" />
            <input type="date" name="date" placeholder="date" />
            <button type="submit">Create Event</button>
            {formState.message && <p>{formState.message}</p>}
        </form>
    )
}

export default NewEventForm