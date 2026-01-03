import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://owxtllbbtqokatdcknqp.supabase.co';
const supabaseAnonKey = 'sb_publishable_AicP385NS9qMgbgaEv1Y7A_VgMEke8B';

export const supabase = createClient(supabaseUrl, supabaseAnonKey);