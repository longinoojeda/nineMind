import { createClient } from "@supabase/supabase-js";

const supabaseClient = createClient(
  "https://zmnjipxlqtmmmadosatj.supabase.co",
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InR3ZXV6ZnVkenlydnJicmdveG5jIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDgzMDE1NTksImV4cCI6MjAyMzg3NzU1OX0.LoFavdz4tYTM3goM99SDJhHdnP7IeFZZWzRlzwyQdn0"
);

export { supabaseClient };