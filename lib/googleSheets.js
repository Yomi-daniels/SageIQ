import { google } from 'googleapis'

const sheets = google.sheets('v4')

// Parse credentials from environment variable
const getAuth = () => {
  try {
    const credentialsStr = process.env.GOOGLE_SHEETS_CREDENTIALS
    
    if (!credentialsStr) {
      console.error('❌ GOOGLE_SHEETS_CREDENTIALS is not set')
      throw new Error('GOOGLE_SHEETS_CREDENTIALS is not set in environment variables')
    }

    console.log('✓ Found credentials string, attempting to parse...')
    
    let credentials
    try {
      credentials = typeof credentialsStr === 'string' 
        ? JSON.parse(credentialsStr) 
        : credentialsStr
      console.log('✓ Successfully parsed credentials')
    } catch (parseError) {
      console.error('❌ Failed to parse credentials JSON:', parseError.message)
      throw new Error(`Failed to parse GOOGLE_SHEETS_CREDENTIALS: ${parseError.message}`)
    }

    if (!credentials.private_key) {
      console.error('❌ Missing private_key in credentials')
      throw new Error('Missing private_key in credentials')
    }

    if (!credentials.client_email) {
      console.error('❌ Missing client_email in credentials')
      throw new Error('Missing client_email in credentials')
    }

    console.log('✓ Creating Google Auth with email:', credentials.client_email)

    return new google.auth.GoogleAuth({
      credentials,
      scopes: ['https://www.googleapis.com/auth/spreadsheets'],
    })
  } catch (error) {
    console.error('❌ Auth initialization error:', error.message)
    throw error
  }
}

export async function appendToSheet(sheetId, range, values) {
  try {
    if (!sheetId) {
      console.error('❌ GOOGLE_SHEETS_ID is not set')
      throw new Error('GOOGLE_SHEETS_ID is not set in environment variables')
    }

    console.log('✓ Attempting to append to sheet:', { sheetId: sheetId.slice(0, 10) + '...', range, valuesLength: values.length })

    let auth
    try {
      auth = getAuth()
      console.log('✓ Got auth object')
    } catch (authError) {
      console.error('❌ Auth failed:', authError.message)
      throw authError
    }

    let authClient
    try {
      authClient = await auth.getClient()
      console.log('✓ Got auth client')
    } catch (clientError) {
      console.error('❌ Failed to get auth client:', clientError.message)
      throw clientError
    }

    console.log('✓ Making API call to Google Sheets...')
    const response = await sheets.spreadsheets.values.append({
      auth: authClient,
      spreadsheetId: sheetId,
      range,
      valueInputOption: 'USER_ENTERED',
      resource: {
        values: [values],
      },
    })

    console.log('✓ Successfully appended to sheet:', response.data)
    return { success: true, data: response.data }
  } catch (error) {
    console.error('❌ Error appending to sheet:', {
      message: error.message,
      code: error.code,
      status: error.status,
      statusText: error.statusText,
    })
    return { success: false, error: error.message }
  }
}

export async function getSheetData(sheetId, range) {
  try {
    const auth = getAuth()
    const authClient = await auth.getClient()

    const response = await sheets.spreadsheets.values.get({
      auth: authClient,
      spreadsheetId: sheetId,
      range,
    })

    return { success: true, data: response.data.values || [] }
  } catch (error) {
    console.error('Error reading sheet:', error)
    return { success: false, error: error.message }
  }
}

// Check if a sheet tab exists and get its properties
export async function checkSheetExists(sheetId, sheetName = 'Enrollments') {
  try {
    const auth = getAuth()
    const authClient = await auth.getClient()

    const response = await sheets.spreadsheets.get({
      auth: authClient,
      spreadsheetId: sheetId,
    })

    const sheet = response.data.sheets.find(s => s.properties.title === sheetName)
    
    if (!sheet) {
      console.warn(`❌ Sheet "${sheetName}" not found. Available sheets:`, response.data.sheets.map(s => s.properties.title))
      return { exists: false, sheets: response.data.sheets.map(s => s.properties.title) }
    }

    console.log(`✓ Sheet "${sheetName}" found`)
    return { exists: true, sheetId: sheet.properties.sheetId }
  } catch (error) {
    console.error('❌ Error checking sheet:', error.message)
    return { exists: false, error: error.message }
  }
}
