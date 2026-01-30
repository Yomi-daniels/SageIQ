import { NextResponse } from "next/server";
import { appendToSheet, checkSheetExists } from '@/lib/googleSheets';

export async function POST(req) {
  try {
    // 1️⃣ Parse JSON safely
    let data;
    try {
      data = await req.json();
    } catch (err) {
      console.error('Invalid JSON body:', err);
      return NextResponse.json(
        { success: false, error: 'Invalid JSON' },
        { status: 400 }
      );
    }

    // 2️⃣ Validate required fields
    if (!data.email || !data.fullName) {
      console.warn('Validation failed:', data);
      return NextResponse.json(
        { success: false, error: 'Email and Full Name are required' },
        { status: 400 }
      );
    }

    console.log('Received enrollment data:', data);

    // 3️⃣ Format data for Google Sheets
    const values = [
      new Date().toISOString(),
      data.fullName || '',
      data.email || '',
      data.phone || '',
      data.trainingInterest || '',
      data.customTraining || '',
      data.experience || '',
      data.message || '',
    ];
    console.log('Formatted values for sheet:', values);

    // 4️⃣ Check environment variables
    const sheetId = process.env.GOOGLE_SHEETS_ID;
    const credentials = process.env.GOOGLE_SHEETS_CREDENTIALS;

    if (!sheetId || !credentials) {
      console.error('Missing Google Sheets configuration:', { sheetId, credentials });
      return NextResponse.json(
        { success: false, error: 'Server configuration error: Missing Google Sheets credentials or sheet ID' },
        { status: 500 }
      );
    }

    // 4.5️⃣ Verify sheet exists
    console.log('Checking if Enrollments sheet exists...');
    const sheetCheck = await checkSheetExists(sheetId, 'Enrollments');
    if (!sheetCheck.exists) {
      console.error('❌ Enrollments sheet does not exist. Available sheets:', sheetCheck.sheets);
      return NextResponse.json(
        { success: false, error: `Sheet "Enrollments" not found. Available sheets: ${sheetCheck.sheets?.join(', ') || 'none'}` },
        { status: 400 }
      );
    }
    console.log('✓ Sheet validation passed');

    // 5️⃣ Attempt to append to Google Sheet
    let result;
    try {
      result = await appendToSheet(sheetId, 'Enrollments!A:H', values);
      console.log('appendToSheet returned:', result);
    } catch (err) {
      console.error('Error appending to sheet:', err);
      return NextResponse.json(
        { success: false, error: `Error: ${err.message}` },
        { status: 500 }
      );
    }

    // 6️ Check result
    if (result?.success) {
      console.log('Successfully saved enrollment to Google Sheets');
      return NextResponse.json({ success: true, message: 'Enrollment saved successfully' });
    } else {
      console.error('Failed to append to sheet:', result?.error || 'Unknown error');
      return NextResponse.json(
        { success: false, error: result?.error || 'Failed to save data' },
        { status: 500 }
      );
    }

  } catch (error) {
    console.error('Unexpected API error:', error);
    return NextResponse.json(
      { success: false, error: error.message || 'Internal server error' },
      { status: 500 }
    );
  }
}

// Test endpoint to verify Google Sheets connection
export async function GET() {
  try {
    const sheetId = process.env.GOOGLE_SHEETS_ID;
    const credentials = process.env.GOOGLE_SHEETS_CREDENTIALS;

    if (!sheetId || !credentials) {
      return NextResponse.json(
        { 
          status: 'error', 
          message: 'Missing environment variables',
          hasSheetId: !!sheetId,
          hasCredentials: !!credentials
        },
        { status: 500 }
      );
    }

    console.log('Testing Google Sheets connection...');
    const sheetCheck = await checkSheetExists(sheetId, 'Enrollments');
    
    if (!sheetCheck.exists) {
      return NextResponse.json(
        { 
          status: 'error', 
          message: 'Enrollments sheet not found',
          availableSheets: sheetCheck.sheets,
          error: sheetCheck.error
        },
        { status: 400 }
      );
    }

    return NextResponse.json({
      status: 'success',
      message: 'Google Sheets connection working',
      sheetId: sheetId.slice(0, 10) + '...',
      sheet: 'Enrollments',
      ready: true
    });
  } catch (error) {
    console.error('Test endpoint error:', error);
    return NextResponse.json(
      { 
        status: 'error', 
        message: error.message || 'Connection test failed'
      },
      { status: 500 }
    );
  }
}
