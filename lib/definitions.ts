export type RawUser = {
    phone: string
    name: string
    dogName: string
    breedAndColor: string
    email: string
    wantsPrints: string
    edited: string
    sent: string 
    match: string
}

export type RegisteredUser = {
    id: string
    phone: string
    name: string
    dogName: string
    breedAndColor: string
    email: string
    wantsPrints: string
    edited: boolean
    sent: boolean 
    match: boolean
}