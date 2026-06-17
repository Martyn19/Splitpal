const { createClient } = require('@supabase/supabase-js')

// Lee las variables del archivo .env
const supabaseUrl = process.env.SUPABASE_URL
const supabaseKey = process.env.SUPABASE_ANON_KEY

// Crea y exporta el cliente de Supabase
const supabase = createClient(supabaseUrl, supabaseKey)

module.exports = supabase