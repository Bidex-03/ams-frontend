import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://apcyewzyjgzphqpxbhpf.supabase.co";
const supabaseAnonKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImFwY3lld3p5amd6cGhxcHhiaHBmIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTcyNzA0NjI5OCwiZXhwIjoyMDQyNjIyMjk4fQ.Ej98V31dIJtPWt3YV5edlu5utgOcpTTc864AZ1RHYtM";

export const supabase = createClient(supabaseUrl, supabaseAnonKey);
