/*
  # Revoke public GraphQL schema visibility for sensitive tables

  ## Summary
  Several internal tables are exposed in the GraphQL schema because `anon` and
  `authenticated` roles have SELECT privileges on them (either directly or via
  the default `public` schema grants). This migration revokes those privileges
  so the tables are no longer discoverable via GraphQL.

  ## Tables affected
  - `public.admins`
  - `public.email_templates`
  - `public.lead_activities`
  - `public.leads`
  - `public.page_sections`
  - `public.page_settings`
  - `public.tasks`

  ## Changes
  1. Revoke SELECT from `anon` on all seven tables.
  2. Revoke SELECT from `authenticated` on all seven tables.
  3. Revoke ALL on all seven tables from both roles for completeness.

  ## Notes
  - RLS policies that grant row-level access to specific authenticated users
    (e.g. admins) remain intact — those policies operate at the row level and
    are not affected by this change.
  - If a future feature legitimately needs authenticated access to any of these
    tables, add a targeted RLS policy AND re-grant only the required privilege
    to `authenticated` at that point.
*/

-- admins
REVOKE ALL ON public.admins FROM anon, authenticated;

-- email_templates
REVOKE ALL ON public.email_templates FROM anon, authenticated;

-- lead_activities
REVOKE ALL ON public.lead_activities FROM anon, authenticated;

-- leads
REVOKE ALL ON public.leads FROM anon, authenticated;

-- page_sections
REVOKE ALL ON public.page_sections FROM anon, authenticated;

-- page_settings
REVOKE ALL ON public.page_settings FROM anon, authenticated;

-- tasks
REVOKE ALL ON public.tasks FROM anon, authenticated;
