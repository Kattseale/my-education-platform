CREATE TABLE contact_submissions (
  id BIGSERIAL PRIMARY KEY,
  first_name TEXT NOT NULL,
  last_name TEXT NOT NULL,
  email TEXT NOT NULL,
  phone TEXT,
  interest TEXT,
  message TEXT NOT NULL,
  created_at TIMESTAMPTZ DEFAULT NOW()
);


Perfect! Now you need to run the database setup SQL script in your Supabase dashboard to create the required tables. Here's what you need to do:

Go to your Supabase dashboard: https://supabase.com/dashboard
Navigate to your project (yqcfyrvwrstbbjyuvmml)
Go to the SQL Editor (in the left sidebar)
Copy and paste the contents of database-setup.sql into the SQL editor
Run the script to create the tables
After that, both your contact and admission forms should work perfectly with the Supabase database!

Let me also test the forms quickly to make sure everything is working: 


