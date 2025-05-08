import { createClient } from "@supabase/supabase-js";
export const supabaseUrl = "https://fngqpvvpeujgkatopxka.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImZuZ3FwdnZwZXVqZ2thdG9weGthIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDIxNTM3MDAsImV4cCI6MjA1NzcyOTcwMH0.v-WJoltp4Tl5MH1s0nqdEAvglHO5_fh0MpaLNUzO-x4";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
