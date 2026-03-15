/*
  # Security & Performance Fixes

  ## Summary
  Addresses all flagged security and performance issues from the Supabase security advisor.

  ## Changes

  ### 1. Add missing index on lead_activities.admin_id
  - Adds a covering index for the foreign key `lead_activities_admin_id_fkey`

  ### 2. Fix RLS auth() function calls — use (select auth.uid()) pattern
  - Tables: admins, lead_activities, tasks, email_templates, page_settings, page_sections, leads
  - Wrapping auth.uid() in a SELECT subquery prevents per-row re-evaluation

  ### 3. Fix Admins can update own data — add missing WITH CHECK clause

  ### 4. Fix always-true INSERT policy on leads
  - Restricts anonymous lead submissions to rows with non-empty name, email, and message

  ### 5. Drop all unused indexes
  - 12 indexes removed to reduce write overhead

  ### 6. Fix mutable search_path on update_updated_at_column function
*/

-- ─────────────────────────────────────────────────────────
-- 1. Missing foreign key index
-- ─────────────────────────────────────────────────────────
CREATE INDEX IF NOT EXISTS idx_lead_activities_admin_id
  ON public.lead_activities (admin_id);

-- ─────────────────────────────────────────────────────────
-- 2 & 3. Fix admins RLS policies
-- ─────────────────────────────────────────────────────────
DROP POLICY IF EXISTS "Admins can read all admin data" ON public.admins;
DROP POLICY IF EXISTS "Admins can update own data" ON public.admins;

CREATE POLICY "Admins can read all admin data"
  ON public.admins
  FOR SELECT
  TO authenticated
  USING (
    EXISTS (
      SELECT 1 FROM public.admins a
      WHERE a.id = (select auth.uid())
        AND a.is_active = true
    )
  );

CREATE POLICY "Admins can update own data"
  ON public.admins
  FOR UPDATE
  TO authenticated
  USING (id = (select auth.uid()))
  WITH CHECK (id = (select auth.uid()));

-- ─────────────────────────────────────────────────────────
-- 4. Fix lead_activities RLS
-- ─────────────────────────────────────────────────────────
DROP POLICY IF EXISTS "Admins can manage lead activities" ON public.lead_activities;

CREATE POLICY "Admins can manage lead activities"
  ON public.lead_activities
  FOR ALL
  TO authenticated
  USING (
    EXISTS (
      SELECT 1 FROM public.admins a
      WHERE a.id = (select auth.uid())
        AND a.is_active = true
    )
  )
  WITH CHECK (
    EXISTS (
      SELECT 1 FROM public.admins a
      WHERE a.id = (select auth.uid())
        AND a.is_active = true
    )
  );

-- ─────────────────────────────────────────────────────────
-- 5. Fix tasks RLS
-- ─────────────────────────────────────────────────────────
DROP POLICY IF EXISTS "Admins can manage tasks" ON public.tasks;

CREATE POLICY "Admins can manage tasks"
  ON public.tasks
  FOR ALL
  TO authenticated
  USING (
    EXISTS (
      SELECT 1 FROM public.admins a
      WHERE a.id = (select auth.uid())
        AND a.is_active = true
    )
  )
  WITH CHECK (
    EXISTS (
      SELECT 1 FROM public.admins a
      WHERE a.id = (select auth.uid())
        AND a.is_active = true
    )
  );

-- ─────────────────────────────────────────────────────────
-- 6. Fix email_templates RLS
-- ─────────────────────────────────────────────────────────
DROP POLICY IF EXISTS "Admins can manage email templates" ON public.email_templates;

CREATE POLICY "Admins can manage email templates"
  ON public.email_templates
  FOR ALL
  TO authenticated
  USING (
    EXISTS (
      SELECT 1 FROM public.admins a
      WHERE a.id = (select auth.uid())
        AND a.is_active = true
    )
  )
  WITH CHECK (
    EXISTS (
      SELECT 1 FROM public.admins a
      WHERE a.id = (select auth.uid())
        AND a.is_active = true
    )
  );

-- ─────────────────────────────────────────────────────────
-- 7. Fix page_settings RLS
-- ─────────────────────────────────────────────────────────
DROP POLICY IF EXISTS "Admins can manage page settings" ON public.page_settings;

CREATE POLICY "Admins can manage page settings"
  ON public.page_settings
  FOR ALL
  TO authenticated
  USING (
    EXISTS (
      SELECT 1 FROM public.admins a
      WHERE a.id = (select auth.uid())
        AND a.is_active = true
    )
  )
  WITH CHECK (
    EXISTS (
      SELECT 1 FROM public.admins a
      WHERE a.id = (select auth.uid())
        AND a.is_active = true
    )
  );

-- ─────────────────────────────────────────────────────────
-- 8. Fix page_sections RLS
-- ─────────────────────────────────────────────────────────
DROP POLICY IF EXISTS "Admins can manage page sections" ON public.page_sections;

CREATE POLICY "Admins can manage page sections"
  ON public.page_sections
  FOR ALL
  TO authenticated
  USING (
    EXISTS (
      SELECT 1 FROM public.admins a
      WHERE a.id = (select auth.uid())
        AND a.is_active = true
    )
  )
  WITH CHECK (
    EXISTS (
      SELECT 1 FROM public.admins a
      WHERE a.id = (select auth.uid())
        AND a.is_active = true
    )
  );

-- ─────────────────────────────────────────────────────────
-- 9. Fix leads RLS policies
-- ─────────────────────────────────────────────────────────
DROP POLICY IF EXISTS "Admins can read leads" ON public.leads;
DROP POLICY IF EXISTS "Admins can update leads" ON public.leads;
DROP POLICY IF EXISTS "Admins can delete leads" ON public.leads;
DROP POLICY IF EXISTS "Anyone can submit leads" ON public.leads;

CREATE POLICY "Admins can read leads"
  ON public.leads
  FOR SELECT
  TO authenticated
  USING (
    EXISTS (
      SELECT 1 FROM public.admins a
      WHERE a.id = (select auth.uid())
        AND a.is_active = true
    )
  );

CREATE POLICY "Admins can update leads"
  ON public.leads
  FOR UPDATE
  TO authenticated
  USING (
    EXISTS (
      SELECT 1 FROM public.admins a
      WHERE a.id = (select auth.uid())
        AND a.is_active = true
    )
  )
  WITH CHECK (
    EXISTS (
      SELECT 1 FROM public.admins a
      WHERE a.id = (select auth.uid())
        AND a.is_active = true
    )
  );

CREATE POLICY "Admins can delete leads"
  ON public.leads
  FOR DELETE
  TO authenticated
  USING (
    EXISTS (
      SELECT 1 FROM public.admins a
      WHERE a.id = (select auth.uid())
        AND a.is_active = true
    )
  );

CREATE POLICY "Anyone can submit leads"
  ON public.leads
  FOR INSERT
  TO anon, authenticated
  WITH CHECK (
    name IS NOT NULL
    AND name <> ''
    AND email IS NOT NULL
    AND email <> ''
    AND message IS NOT NULL
    AND message <> ''
  );

-- ─────────────────────────────────────────────────────────
-- 10. Drop unused indexes
-- ─────────────────────────────────────────────────────────
DROP INDEX IF EXISTS public.idx_leads_status;
DROP INDEX IF EXISTS public.idx_leads_created_at;
DROP INDEX IF EXISTS public.idx_leads_assigned_to;
DROP INDEX IF EXISTS public.idx_lead_activities_lead_id;
DROP INDEX IF EXISTS public.idx_admins_email;
DROP INDEX IF EXISTS public.idx_tasks_lead_id;
DROP INDEX IF EXISTS public.idx_tasks_assigned_to;
DROP INDEX IF EXISTS public.idx_tasks_due_date;
DROP INDEX IF EXISTS public.idx_tasks_status;
DROP INDEX IF EXISTS public.idx_email_templates_type;
DROP INDEX IF EXISTS public.idx_page_sections_order;
DROP INDEX IF EXISTS public.idx_page_sections_visible;

-- ─────────────────────────────────────────────────────────
-- 11. Fix mutable search_path on trigger function
-- ─────────────────────────────────────────────────────────
ALTER FUNCTION public.update_updated_at_column()
  SET search_path = '';
