/*
  # Advanced CRM and Page Builder Tables

  1. New Tables
    - `tasks` - Task management for leads
    - `email_templates` - Email templates for communication
    - `page_settings` - Site-wide settings for page builder
    - `page_sections` - Individual page sections for page builder

  2. Security
    - Enable RLS on all new tables
    - Add policies for admin-only access

  3. Performance
    - Add indexes for frequently queried columns
    - Add triggers for updated_at timestamps

  4. Default Data
    - Insert default email templates for common scenarios
*/

-- Create tasks table
CREATE TABLE IF NOT EXISTS tasks (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  title text NOT NULL,
  description text,
  lead_id uuid REFERENCES leads(id) ON DELETE CASCADE,
  assigned_to uuid REFERENCES admins(id) ON DELETE SET NULL,
  due_date timestamptz,
  priority text DEFAULT 'medium' CHECK (priority IN ('low', 'medium', 'high', 'urgent')),
  status text DEFAULT 'pending' CHECK (status IN ('pending', 'in_progress', 'completed')),
  type text DEFAULT 'follow_up' CHECK (type IN ('call', 'email', 'meeting', 'follow_up', 'demo')),
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

-- Create email templates table
CREATE TABLE IF NOT EXISTS email_templates (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL UNIQUE,
  subject text NOT NULL,
  content text NOT NULL,
  type text DEFAULT 'follow_up' CHECK (type IN ('welcome', 'follow_up', 'proposal', 'thank_you')),
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

-- Create page settings table
CREATE TABLE IF NOT EXISTS page_settings (
  id text PRIMARY KEY,
  settings jsonb NOT NULL DEFAULT '{}',
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

-- Create page sections table
CREATE TABLE IF NOT EXISTS page_sections (
  id text PRIMARY KEY,
  type text DEFAULT 'custom' CHECK (type IN ('hero', 'services', 'pricing', 'testimonials', 'cta', 'custom')),
  title text NOT NULL,
  content jsonb NOT NULL DEFAULT '{}',
  "order" integer DEFAULT 0,
  visible boolean DEFAULT true,
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

-- Enable RLS
ALTER TABLE tasks ENABLE ROW LEVEL SECURITY;
ALTER TABLE email_templates ENABLE ROW LEVEL SECURITY;
ALTER TABLE page_settings ENABLE ROW LEVEL SECURITY;
ALTER TABLE page_sections ENABLE ROW LEVEL SECURITY;

-- Create policies for tasks
CREATE POLICY "Admins can manage tasks"
  ON tasks
  FOR ALL
  TO authenticated
  USING (
    EXISTS (
      SELECT 1 FROM admins 
      WHERE admins.id = auth.uid() 
      AND admins.is_active = true
    )
  );

-- Create policies for email templates
CREATE POLICY "Admins can manage email templates"
  ON email_templates
  FOR ALL
  TO authenticated
  USING (
    EXISTS (
      SELECT 1 FROM admins 
      WHERE admins.id = auth.uid() 
      AND admins.is_active = true
    )
  );

-- Create policies for page settings
CREATE POLICY "Admins can manage page settings"
  ON page_settings
  FOR ALL
  TO authenticated
  USING (
    EXISTS (
      SELECT 1 FROM admins 
      WHERE admins.id = auth.uid() 
      AND admins.is_active = true
    )
  );

-- Create policies for page sections
CREATE POLICY "Admins can manage page sections"
  ON page_sections
  FOR ALL
  TO authenticated
  USING (
    EXISTS (
      SELECT 1 FROM admins 
      WHERE admins.id = auth.uid() 
      AND admins.is_active = true
    )
  );

-- Create indexes for performance
CREATE INDEX IF NOT EXISTS idx_tasks_lead_id ON tasks(lead_id);
CREATE INDEX IF NOT EXISTS idx_tasks_assigned_to ON tasks(assigned_to);
CREATE INDEX IF NOT EXISTS idx_tasks_due_date ON tasks(due_date);
CREATE INDEX IF NOT EXISTS idx_tasks_status ON tasks(status);
CREATE INDEX IF NOT EXISTS idx_email_templates_type ON email_templates(type);
CREATE INDEX IF NOT EXISTS idx_email_templates_name ON email_templates(name);
CREATE INDEX IF NOT EXISTS idx_page_sections_order ON page_sections("order");
CREATE INDEX IF NOT EXISTS idx_page_sections_visible ON page_sections(visible);

-- Create triggers for updated_at
DO $$
BEGIN
  IF NOT EXISTS (
    SELECT 1 FROM information_schema.triggers 
    WHERE trigger_name = 'update_tasks_updated_at'
  ) THEN
    CREATE TRIGGER update_tasks_updated_at 
      BEFORE UPDATE ON tasks
      FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();
  END IF;
END $$;

DO $$
BEGIN
  IF NOT EXISTS (
    SELECT 1 FROM information_schema.triggers 
    WHERE trigger_name = 'update_email_templates_updated_at'
  ) THEN
    CREATE TRIGGER update_email_templates_updated_at 
      BEFORE UPDATE ON email_templates
      FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();
  END IF;
END $$;

DO $$
BEGIN
  IF NOT EXISTS (
    SELECT 1 FROM information_schema.triggers 
    WHERE trigger_name = 'update_page_settings_updated_at'
  ) THEN
    CREATE TRIGGER update_page_settings_updated_at 
      BEFORE UPDATE ON page_settings
      FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();
  END IF;
END $$;

DO $$
BEGIN
  IF NOT EXISTS (
    SELECT 1 FROM information_schema.triggers 
    WHERE trigger_name = 'update_page_sections_updated_at'
  ) THEN
    CREATE TRIGGER update_page_sections_updated_at 
      BEFORE UPDATE ON page_sections
      FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();
  END IF;
END $$;

-- Insert default email templates (only if they don't exist)
DO $$
BEGIN
  -- Welcome Email Template
  IF NOT EXISTS (SELECT 1 FROM email_templates WHERE name = 'Welcome Email') THEN
    INSERT INTO email_templates (name, subject, content, type) VALUES
    (
      'Welcome Email',
      'Welcome to Daily Creative Designs!',
      'Hi {{name}},

Thank you for your interest in Daily Creative Designs! We''re excited to help you transform your business with our professional digital solutions.

Our team will be in touch within 24 hours to discuss your specific needs and provide you with a custom proposal.

In the meantime, feel free to check out our portfolio and client testimonials on our website.

Best regards,
Daily Creative Designs Team',
      'welcome'
    );
  END IF;

  -- Follow Up Email Template
  IF NOT EXISTS (SELECT 1 FROM email_templates WHERE name = 'Follow Up Email') THEN
    INSERT INTO email_templates (name, subject, content, type) VALUES
    (
      'Follow Up Email',
      'Following up on your inquiry - {{name}}',
      'Hi {{name}},

I wanted to follow up on your recent inquiry about our digital marketing services. 

Have you had a chance to review the information we sent? I''d love to schedule a quick 15-minute call to discuss how we can help you achieve your business goals.

Our current clients are seeing amazing results:
- Average of ₹50 per lead
- 15%+ conversion rates
- 100+ leads per month

Would you be available for a brief call this week?

Best regards,
{{sender_name}}
Daily Creative Designs',
      'follow_up'
    );
  END IF;

  -- Proposal Email Template
  IF NOT EXISTS (SELECT 1 FROM email_templates WHERE name = 'Proposal Email') THEN
    INSERT INTO email_templates (name, subject, content, type) VALUES
    (
      'Proposal Email',
      'Your Custom Digital Marketing Proposal - {{name}}',
      'Hi {{name}},

Thank you for taking the time to speak with us about your digital marketing needs.

As discussed, I''ve prepared a custom proposal that outlines exactly how we can help you:

✅ Professional Logo Design
✅ High-Converting Landing Page
✅ Meta Ads Campaign Setup
✅ Lead Generation System
✅ Monthly Performance Reports

The complete package is available for just ₹9,999 (one-time) or you can opt for our monthly lead generation service at ₹9,999/month.

I''ve attached the detailed proposal to this email. Please review it and let me know if you have any questions.

I''m confident we can deliver exceptional results for your business. Shall we schedule a call to discuss the next steps?

Best regards,
{{sender_name}}
Daily Creative Designs',
      'proposal'
    );
  END IF;

  -- Thank You Email Template
  IF NOT EXISTS (SELECT 1 FROM email_templates WHERE name = 'Thank You Email') THEN
    INSERT INTO email_templates (name, subject, content, type) VALUES
    (
      'Thank You Email',
      'Thank you for choosing Daily Creative Designs!',
      'Hi {{name}},

Welcome to the Daily Creative Designs family! 🎉

We''re thrilled that you''ve decided to partner with us for your digital marketing needs. Your project is now in our capable hands, and we''re committed to delivering exceptional results.

Here''s what happens next:
1. Project kickoff call within 24 hours
2. Initial designs and strategy within 3-5 days
3. Complete delivery within 7 days
4. Ongoing support and optimization

You''ll receive regular updates throughout the process, and our team is always available to answer any questions.

Thank you for trusting us with your business growth. We can''t wait to help you achieve amazing results!

Best regards,
The Daily Creative Designs Team

P.S. Don''t forget to follow us on social media for tips and updates!',
      'thank_you'
    );
  END IF;
END $$;