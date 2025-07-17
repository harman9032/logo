/*
  # Fix RLS Policy for Public Lead Submissions

  1. Security Updates
    - Allow public (unauthenticated) users to INSERT leads
    - Keep admin-only access for SELECT, UPDATE, DELETE operations
    - Ensure form submissions work without authentication

  2. Changes
    - Drop existing restrictive policy
    - Create separate policies for different operations
    - Allow public INSERT while maintaining admin control for other operations
*/

-- Drop the existing restrictive policy
DROP POLICY IF EXISTS "Admins can manage leads" ON leads;

-- Create separate policies for different operations

-- Allow public users to insert leads (for form submissions)
CREATE POLICY "Anyone can submit leads"
  ON leads
  FOR INSERT
  TO public
  WITH CHECK (true);

-- Allow authenticated admins to read all leads
CREATE POLICY "Admins can read leads"
  ON leads
  FOR SELECT
  TO authenticated
  USING (
    EXISTS (
      SELECT 1 FROM admins 
      WHERE admins.id = auth.uid() 
      AND admins.is_active = true
    )
  );

-- Allow authenticated admins to update leads
CREATE POLICY "Admins can update leads"
  ON leads
  FOR UPDATE
  TO authenticated
  USING (
    EXISTS (
      SELECT 1 FROM admins 
      WHERE admins.id = auth.uid() 
      AND admins.is_active = true
    )
  )
  WITH CHECK (
    EXISTS (
      SELECT 1 FROM admins 
      WHERE admins.id = auth.uid() 
      AND admins.is_active = true
    )
  );

-- Allow authenticated admins to delete leads
CREATE POLICY "Admins can delete leads"
  ON leads
  FOR DELETE
  TO authenticated
  USING (
    EXISTS (
      SELECT 1 FROM admins 
      WHERE admins.id = auth.uid() 
      AND admins.is_active = true
    )
  );