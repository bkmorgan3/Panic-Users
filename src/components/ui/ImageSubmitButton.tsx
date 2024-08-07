'use client'

const submitPhotos = async () => {
    console.log("submitting")
}

export default function SubmitButton() {
    return (
        <button onClick={submitPhotos}>Send Photos</button>
    )
}