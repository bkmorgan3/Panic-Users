import { google } from "googleapis"
import keys from "../keys.json"
import { prisma } from "./prisma"

export async function getSheetsData() {
    const jwt = new google.auth.JWT(
        process.env.client_email, 
        '',
         process.env.private_key.replace(/\\n/g, 'n'), ['https://www.googleapis.com/auth/spreadsheets.readonly']
    )
    const sheets = google.sheets({version: "v4", auth: jwt})
    const range = "Form Responses 1!A2:J152"

    try {
        const res = await sheets.spreadsheets.values.get({
            spreadsheetId: process.env.SPREADSHEET_ID,
            range
        })
        return res.data.values
    } catch(err) {
        console.error("Error fetching Sheets Data: ", err)
        return []
    }
}

export async function formatData (data){
//    console.log('data', data)
// data.forEach(user => console.log(user[6]))
// console.log(data[0])
const user = data[1]
console.log(user)

const targetStr = user[8].toLowerCase()
// console.log(  JSON.parse(targetStr))
//    data.forEach((user, i) => prisma.user.create({
//     data: {
//         // createdAt: user[0],
//         phone: user[1],
//         name: user[2],
//         dogName: user[3],
//         breedAndColor: user[4],
//         email: user[5],
//         wantsPrints: user[6],
//         edited: user[7],
//         sent: user[8],
//         match: user[9]
//     }
//    }))
// await Promise.all(data.map(async (user) => {
//     await prisma.user.create({
//         data: {
//             phone: user[1],
//             name: user[2],
//             dogName: user[3],
//             breedAndColor: user[4],
//             email: user[5],
//             wantsPrints: user[6],
//             edited: JSON.parse(user[7].toLowerCase()),
//             sent: JSON.parse(user[8].toLowerCase()),
//             match: JSON.parse(user[9].toLowerCase()),
//         }
//     })
// }))
}

export async function seedDB(data) {
   data.forEach((user, i) => console.log('us', user))
}