// app/api/contact/route.ts
import { NextRequest, NextResponse } from 'next/server'

export async function POST(request: NextRequest) {
  try {
    // Import Supabase client dynamically
    const { supabase } = await import('@/lib/supabase')

    const body = await request.json()
    console.log('Form submission body:', body)

    const { firstName, lastName, email, phone, interest, message } = body

    // Validate required fields
    if (!firstName || !lastName || !email || !message) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      )
    }

    // Insert into Supabase
    const { data, error } = await supabase
      .from('contact_submissions')
      .insert([
        {
          first_name: firstName,
          last_name: lastName,
          email,
          phone: phone || null,
          interest: interest || null,
          message
        }
      ])
      .select()

    if (error) {
      console.error('Supabase insert error:', error)
      return NextResponse.json(
        { error: 'Failed to save submission', details: error.message },
        { status: 500 }
      )
    }

    console.log('Supabase insert success:', data)
    return NextResponse.json({
      success: true,
      message: 'Contact form submitted successfully',
      data
    })
  } catch (err) {
    console.error('Unexpected error in /api/contact:', err)
    return NextResponse.json(
      { error: 'Unexpected server error', details: String(err) },
      { status: 500 }
    )
  }
}
