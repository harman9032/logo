import { createClient } from '@supabase/supabase-js';

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

if (!supabaseUrl || !supabaseAnonKey) {
  throw new Error('Missing Supabase environment variables');
}

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

export type Lead = {
  id: string;
  name: string;
  email: string;
  phone: string;
  business?: string;
  package: string;
  message?: string;
  status: 'new' | 'contacted' | 'qualified' | 'proposal_sent' | 'won' | 'lost';
  priority: 'low' | 'medium' | 'high' | 'urgent';
  source: string;
  assigned_to?: string;
  notes?: string;
  created_at: string;
  updated_at: string;
};

export type Admin = {
  id: string;
  email: string;
  name: string;
  role: 'admin' | 'manager' | 'agent';
  is_active: boolean;
  created_at: string;
  updated_at: string;
};

export type LeadActivity = {
  id: string;
  lead_id: string;
  admin_id: string;
  activity_type: 'note' | 'call' | 'email' | 'whatsapp' | 'meeting' | 'status_change';
  description: string;
  created_at: string;
};