-- Create contact_submissions table
CREATE TABLE IF NOT EXISTS contact_submissions (
    id SERIAL PRIMARY KEY,
    first_name VARCHAR(100) NOT NULL,
    last_name VARCHAR(100) NOT NULL,
    email VARCHAR(255) NOT NULL,
    phone VARCHAR(20),
    interest VARCHAR(100),
    message TEXT NOT NULL,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Create admission_applications table
CREATE TABLE IF NOT EXISTS admission_applications (
    id SERIAL PRIMARY KEY,
    
    -- Student Information
    first_name VARCHAR(100) NOT NULL,
    last_name VARCHAR(100) NOT NULL,
    id_number VARCHAR(20) NOT NULL,
    date_of_birth DATE NOT NULL,
    email VARCHAR(255) NOT NULL,
    phone VARCHAR(20) NOT NULL,
    
    -- Academic Information
    grade_applying VARCHAR(50) NOT NULL,
    previous_school VARCHAR(200),
    current_grade VARCHAR(50),
    academic_year VARCHAR(10) NOT NULL,
    
    -- Parent/Guardian Information
    parent_name VARCHAR(200) NOT NULL,
    parent_email VARCHAR(255) NOT NULL,
    parent_phone VARCHAR(20) NOT NULL,
    relationship VARCHAR(50) NOT NULL,
    address TEXT NOT NULL,
    
    -- Additional Information
    special_needs TEXT,
    motivation TEXT,
    
    -- Application Status
    application_status VARCHAR(20) DEFAULT 'pending',
    
    -- Timestamps
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Create indexes for better performance
CREATE INDEX IF NOT EXISTS idx_contact_submissions_email ON contact_submissions(email);
CREATE INDEX IF NOT EXISTS idx_contact_submissions_created_at ON contact_submissions(created_at);

CREATE INDEX IF NOT EXISTS idx_admission_applications_email ON admission_applications(email);
CREATE INDEX IF NOT EXISTS idx_admission_applications_status ON admission_applications(application_status);
CREATE INDEX IF NOT EXISTS idx_admission_applications_created_at ON admission_applications(created_at);

-- RLS is disabled for easier development
-- If you want to enable RLS later for security, uncomment the following:

-- ALTER TABLE contact_submissions ENABLE ROW LEVEL SECURITY;
-- ALTER TABLE admission_applications ENABLE ROW LEVEL SECURITY;

-- CREATE POLICY "Allow public inserts" ON contact_submissions
--     FOR INSERT WITH CHECK (true);

-- CREATE POLICY "Allow public inserts" ON admission_applications
--     FOR INSERT WITH CHECK (true);