import { NextResponse } from 'next/server'
import { appendToSheet } from '@/lib/googleSheets'

export async function POST(req) {
  try {
    const data = await req.json()

    // Format data for Google Sheets
    const values = [
      new Date().toISOString(),
      data.name || '',
      data.email || '',
      data.phone || '',
      data.message || '',
    ]

    const result = await appendToSheet(
      process.env.GOOGLE_SHEETS_ID,
      'Contact!A:E',
      values
    )

    if (result.success) {
      return NextResponse.json({ success: true, message: 'Contact form submitted successfully' })
    } else {
      return NextResponse.json({ success: false, error: result.error }, { status: 500 })
    }
  } catch (error) {
    console.error('API error:', error)
    return NextResponse.json({ success: false, error: error.message }, { status: 500 })
  }
}
