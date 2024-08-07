'use client'
import { CldUploadButton } from "next-cloudinary"

export default function ImageForm() {
    return (
        <section>
            <CldUploadButton uploadPreset="nf55zyuz" />
        </section>
    )
}