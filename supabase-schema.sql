-- ChatReply Supabase Database Schema

-- Waitlist table for collecting early access signups
CREATE TABLE waitlist (
  id SERIAL PRIMARY KEY,
  name TEXT NOT NULL,
  email TEXT NOT NULL UNIQUE,
  business TEXT,
  website TEXT,
  whatsapp TEXT,
  use_case TEXT,
  ip TEXT,
  user_agent TEXT,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Enable Row Level Security (RLS)
ALTER TABLE waitlist ENABLE ROW LEVEL SECURITY;

-- Create policy to allow inserts from authenticated and anonymous users
CREATE POLICY "Allow anonymous inserts" ON waitlist
  FOR INSERT WITH CHECK (true);

-- Create policy to allow reads only for authenticated users (optional)
-- CREATE POLICY "Allow authenticated reads" ON waitlist
--   FOR SELECT USING (auth.role() = 'authenticated');

-- Create index on email for faster lookups
CREATE INDEX idx_waitlist_email ON waitlist(email);

-- Create index on created_at for sorting
CREATE INDEX idx_waitlist_created_at ON waitlist(created_at);

-- Optional: Create a function to get waitlist stats
CREATE OR REPLACE FUNCTION get_waitlist_stats()
RETURNS TABLE(
  total_signups BIGINT,
  today_signups BIGINT,
  this_week_signups BIGINT
) AS $$
BEGIN
  RETURN QUERY
  SELECT 
    COUNT(*) as total_signups,
    COUNT(*) FILTER (WHERE DATE(created_at) = CURRENT_DATE) as today_signups,
    COUNT(*) FILTER (WHERE created_at >= CURRENT_DATE - INTERVAL '7 days') as this_week_signups
  FROM waitlist;
END;
$$ LANGUAGE plpgsql;
