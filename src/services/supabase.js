import { createClient } from "@supabase/supabase-js";

 const supabaseUrl = 'https://jrubnjwivnkeabeovhfi.supabase.co'
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImpydWJuandpdm5rZWFiZW92aGZpIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTEzOTA2ODAsImV4cCI6MjAwNjk2NjY4MH0.VY9rr7ku81vWnk4ATCbOoXWArtOJCrN2NijkxKZDEAc'
const supabase = createClient(supabaseUrl, supabaseKey)
export default supabase