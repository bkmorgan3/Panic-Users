import { google } from "googleapis"
import keys from "../keys.json"

export async function getSheetsData() {
    const jwt = new google.auth.JWT(
        keys.client_email, '', keys.private_key.replace(/\\n/g, 'n'), ['https://www.googleapis.com/auth/spreadsheets.readonly']
    )
    const sheets = google.sheets({version: "v4", auth: jwt})
    const range = "Form Responses 1!A:Z"

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