import { createClient, SupabaseClient } from '@supabase/supabase-js';
// eslint-disable-next-line import/no-unresolved
import { configType } from 'modules/DbConfigType';

const config: configType = {
    url: `${import.meta.env.SUPABASE_URL}`,
    anon: `${import.meta.env.ANON_KEY}`
}

const db: SupabaseClient = createClient(config.url, config.anon);

export default db;