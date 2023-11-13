import { createClient } from "@supabase/supabase-js";

export const supabaseUrl = "https://cghwqcjfmdjcbsbqfmcn.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImNnaHdxY2pmbWRqY2JzYnFmbWNuIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTg4MDgyMjgsImV4cCI6MjAxNDM4NDIyOH0.PjeLhWcy0tVfEXXzD_pli2pC6vF79wJe7_JOtIXj2vk";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
