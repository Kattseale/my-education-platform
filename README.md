# Environments

Get your API Keys from Supabase 
Navigate to the [API settings ](https://app.supabase.com/project/_/settings/api) and paste them into the Vercel deployment interface. Copy project API keys and paste into the NEXT_PUBLIC_SUPABASE_ANON_KEY and SUPABASE_SERVICE_ROLE_KEY fields, and copy the project URL and paste to Vercel as NEXT_PUBLIC_SUPABASE_URL.

Congrats, this completes the Supabase setup, almost there!


# Database 

Now you need to run the database setup SQL script in your Supabase dashboard to create the required tables. Here's what you need to do:

- Go to your Supabase dashboard: https://supabase.com/dashboard

- Navigate to your project 

- Go to the SQL Editor (in the left sidebar)

- Copy and paste the contents of database-setup.sql into the SQL editor

- Run the script to create the tables

- After that, both your contact and admission forms should work perfectly with the Supabase database!


```sql
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
```


