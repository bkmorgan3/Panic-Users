import { google } from "googleapis"
import keys from "../keys.json"
import { prisma } from "./prisma"

export async function getSheetsData() {
    if (process.env.private_key) {
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

}