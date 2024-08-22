'use client'
import { useFormState } from "react-dom";
import { createUser } from "../actions/users";

const initState = {message: null}

type UserFormProps = {
    userEmail: string
    clerkId: string 
}

const NewUserForm = ({userEmail, clerkId}: UserFormProps) => {
    const updateUserWithEmail = createUser.bind(null, userEmail)

    const [formState, action] = useFormState<{message: string | null}>(createUser, initState )

    return (
        <form action={updateUserWithEmail} className="flex flex-col mx-auto w-[500px] mt-20 items-center gap-y-2 border-2 border-zinc-50 rounded" >
            <h3>Register your pet's details</h3>
            <input className="text-black" name="name" required placeholder="your name" type="text" />
            <input className="text-black" name="petname" required placeholder="pet name" type="text" />
            <input className="text-black" name="phone" required placeholder="phone" type="text" />
            <input className="text-black" type="text" name="breed" placeholder="breed and color" />
            <input type="hidden" name="clerkId" value={clerkId} />
            <fieldset>
                <legend>Would you like prints?</legend>
                <div>
                    <input type="radio" value="Yes" name="prints" id="yes" />
                    <label htmlFor="yes">Yes</label>
                </div>
                <div>
                    <input type="radio" value="Maybe" name="prints" id="maybe" />
                    <label htmlFor="maybe">Maybe</label>
                </div>
                <div>
                    <input type="radio" value="No" name="prints" id="no" />
                    <label htmlFor="no">No</label>
                </div>
            </fieldset>
            <button className="border border-sky-500" type="submit">Complete Registration</button>
            {formState?.message && <p>{formState.message}</p>}
        </form>
    )
}

export default NewUserForm