import { createClient } from '@supabase/supabase-js'

const SUPABASE_URL = '' // Ссылка, которую выдал Supabase
const SUPABASE_API_KEY = '' // API ключ
const supabase = createClient(SUPABASE_URL, SUPABASE_API_KEY)
export default supabase