import { createClient } from "@supabase/supabase-js";

const url = process.env.NEXT_PUBLIC_SUPABASE_URL;
const anon = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

// Fallback para não quebrar build/local antes de configurar env.
// (as chamadas vão falhar, mas a UI continua funcionando)
const safeUrl = url && url.length > 0 ? url : "https://placeholder.supabase.co";
const safeAnon = anon && anon.length > 0 ? anon : "public-anon-key-placeholder";

export const supabase = createClient(safeUrl, safeAnon);
