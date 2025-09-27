import { NextRequest, NextResponse } from 'next/server'

export async function POST(request: NextRequest) {
    try {
        // Import Supabase client dynamically to avoid build-time issues
        const { supabase } = await import('@/lib/supabase')

        const body = await request.json()
        const {
            firstName, lastName, idNumber, dateOfBirth, email, phone,
            gradeApplying, previousSchool, currentGrade, academicYear, preferredSchool, accommodationRequired,
            parentName, parentEmail, parentPhone, relationship, address,
            specialNeeds, motivation
        } = body

        // Validate required fields
        if (!firstName || !lastName || !idNumber || !dateOfBirth || !email || !phone ||
            !gradeApplying || !academicYear || !preferredSchool || !accommodationRequired ||!parentName || !parentEmail || !parentPhone ||
            !relationship || !address) {
            return NextResponse.json(
                { error: 'Missing required fields' },
                { status: 400 }
            )
        }

        // Insert data into Supabase
        const { data, error } = await supabase
            .from('admission_applications')
            .insert([
                {
                    // Student Information
                    first_name: firstName,
                    last_name: lastName,
                    id_number: idNumber,
                    date_of_birth: dateOfBirth,
                    email: email,
                    phone: phone,

                    // Academic Information
                    grade_applying: gradeApplying,
                    previous_school: previousSchool || null,
                    current_grade: currentGrade || null,
                    academic_year: academicYear,
                    preferred_school: preferredSchool,
                    accommodation_required: accommodationRequired || null,

                    // Parent/Guardian Information
                    parent_name: parentName,
                    parent_email: parentEmail,
                    parent_phone: parentPhone,
                    relationship: relationship,
                    address: address,

                    // Additional Information
                    special_needs: specialNeeds || null,
                    motivation: motivation || null,

                    // Status
                    application_status: 'pending'
                }
            ])
            .select()

        if (error) {
            console.error('Supabase error:', error)
            return NextResponse.json(
                { error: 'Failed to save application' },
                { status: 500 }
            )
        }

        return NextResponse.json({
            success: true,
            message: 'Application submitted successfully',
            data: data
        })

    } catch (error) {
        console.error('Admission application error:', error)
        return NextResponse.json(
            { error: 'Failed to submit application' },
            { status: 500 }
        )
    }
}