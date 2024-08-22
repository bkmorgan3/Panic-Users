import { google } from "googleapis"
import keys from "../keys.json"
import { prisma } from "./prisma"

export async function getSheetsData() {
    if (process.env.PRIVATE_KEY) {
        const jwt = new google.auth.JWT(
            process.env.CLIENT_EMAIL, 
            '',
             process.env.PRIVATE_KEY.replace(/\\n/g, 'n'), ['https://www.googleapis.com/auth/spreadsheets.readonly']
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
            console.log("Error fetching Sheets Data: ", err)
            return []
        }
    }

}

export async function saveUserData(users) {
   await Promise.all(users.map(async (user) => {
    await prisma.user.create({
        data: {
           phone: user[1],
           name: user[2],
           dogName: user[3],
           breedAndColor: user[4],
           email: user[5],
           wantsPrints: user[6],
           edited: JSON.parse(user[7].toLowerCase()),
           sent: JSON.parse(user[8].toLowerCase()),
           match: JSON.parse(user[9].toLowerCase()),
        }
     })
   }))
}   

// export const async function addUsersToEvent() {
//     await Promise.all(users.map(async (user) => {

//     }))
// }