import { createClient } from "@supabase/supabase-js";

const supabaseClient = createClient(
  "https://zmnjipxlqtmmmadosatj.supabase.co",
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InptbmppcHhscXRtbW1hZG9zYXRqIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDkxMTY1NTgsImV4cCI6MjAyNDY5MjU1OH0.g9BUHzswaxWh6Fr9tm7iQ765g0dRc22PwAOSoiEWA84"
);

export { supabaseClient };