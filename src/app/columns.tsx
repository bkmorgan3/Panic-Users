"use client"

import { ColumnDef } from "@tanstack/react-table"
import { UserProps } from "./types"

export const columns: ColumnDef<UserProps>[] = [
    {
        accessorKey: "name",
        header: "Name"
    },
    {
        accessorKey: "phone",
        header: "Phone"
    },
    {
        accessorKey: "dogName",
        header: "Dog Name"
    },
    {
        accessorKey: "wantsPrints",
        header: "Wants Prints"
    },
    {
        accessorKey: "email",
        header: "Email"
    },
    {
        accessorKey: "breedAndColor",
        header: "Breed / Color"
    },
    
]