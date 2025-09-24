import { NextRequest, NextResponse } from 'next/server'

export async function POST(request: NextRequest) {
    try {
        // Import Supabase client dynamically to avoid build-time issues
        const { supabase } = await import('@/lib/supabase')

        const body = await request.json()
        const { firstName, lastName, email, phone, interest, message } = body

        // Validate required fields
        if (!firstName || !lastName || !email || !message) {
            return NextResponse.json(
                { error: 'Missing required fields' },
                { status: 400 }
            )
        }

        // Insert data into Supabase
        const { data, error } = await supabase
            .from('contact_submissions')
            .insert([
                {
                    first_name: firstName,
                    last_name: lastName,
                    email: email,
                    phone: phone || null,
                    interest: interest || null,
                    message: message
                }
            ])
            .select()

        if (error) {
            console.error('Supabase error:', error)
            return NextResponse.json(
                { error: 'Failed to save submission' },
                { status: 500 }
            )
        }

        return NextResponse.json({
            success: true,
            message: 'Contact form submitted successfully',
            data: data
        })

    } catch (error) {
        console.error('Contact form error:', error)
        return NextResponse.json(
            { error: 'Failed to submit form' },
            { status: 500 }
        )
    }
}