import { NextResponse } from "next/server"

export async function POST(req) {
  const data = await req.json()

  try {
    const response = await fetch(`https://api.airtable.com/v0/${process.env.AIRTABLE_BASE_ID}/Training%20Enrollments`, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${process.env.AIRTABLE_API_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        records: [
          {
            fields: {
              Name: data.name,
              Email: data.email,
              Phone: data.phone,
              "Training Type": data.training,
              Message: data.message,
            },
          },
        ],
      }),
    })

    const result = await response.json()
    return NextResponse.json({ success: true, result })
  } catch (error) {
    console.error(error)
    return NextResponse.json({ success: false, error: "Failed to submit form" }, { status: 500 })
  }
}
