import { createClient, SupabaseClient } from '@supabase/supabase-js';

import { configType } from 'modules/DbConfigType';

const config: configType = {
    url: `${import.meta.env.VITE_SUPABASE_URL}`,
    anon: `${import.meta.env.VITE_SUPABASE_ANON_KEY}`
};

const db: SupabaseClient = createClient(config.url, config.anon);

export default db;  