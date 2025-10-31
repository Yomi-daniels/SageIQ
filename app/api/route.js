import { type NextRequest, NextResponse } from "next/server"

export async function POST()
    const body = await request.json()
    const { name, email, subject, message } = body

    // Validate required fields
    if (!name || !email || !subject || !message) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 })
    }

    const AIRTABLE_API_KEY = process.env.AIRTABLE_API_KEY
    const AIRTABLE_BASE_ID = process.env.AIRTABLE_BASE_ID
    const AIRTABLE_TABLE_NAME = process.env.AIRTABLE_TABLE_NAME || "Contact Submissions"

    if (!AIRTABLE_API_KEY || !AIRTABLE_BASE_ID) {
      console.error("Missing Airtable configuration")
      return NextResponse.json({ error: "Server configuration error" }, { status: 500 })
    }

    // Send to Airtable
    const airtableResponse = await fetch(
      `https://api.airtable.com/v0/${AIRTABLE_BASE_ID}/${encodeURIComponent(AIRTABLE_TABLE_NAME)}`,
      {
        method: "POST",
        headers: {
          Authorization: `Bearer ${AIRTABLE_API_KEY}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          records: [
            {
              fields: {
                Name: name,
                Email: email,
                Subject: subject,
                Message: message,
                "Submitted At": new Date().toISOString(),
              },
            },
          ],
        }),
      },
    )

    if (!airtableResponse.ok) {
      const error = await airtableResponse.text()
      console.error("Airtable error:", error)
      return NextResponse.json({ error: "Failed to save submission" }, { status: 500 })
    }

    return NextResponse.json({ success: true, message: "Submission saved successfully" }, { status: 200 })
  } catch (error) {
    console.error("API error:", error)
    return NextResponse.json({ error: "Internal server error" }, { status: 500 })
  }
}
