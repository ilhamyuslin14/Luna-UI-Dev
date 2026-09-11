import { createClient } from '@supabase/supabase-js';

// Supabase Client khusus untuk database PRODUCTION (nijybuxerotauevrivge)
// Dibuat terpisah agar tidak mengganggu atau menimpa koneksi database prototype di src/config/supabase.js
const prodUrl = 'https://nijybuxerotauevrivge.supabase.co';
const prodAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im5panlidXhlcm90YXVldnJpdmdlIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTE5NDMyMjEsImV4cCI6MjA2NzUxOTIyMX0.mGVQyibYhJcaVJ_M2bd7zkFjAmsEoQGcmS1eQUiV_iw';

export const supabaseProd = createClient(prodUrl, prodAnonKey);
