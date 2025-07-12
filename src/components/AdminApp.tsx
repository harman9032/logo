import React, { useState, useEffect } from 'react';
import AdminLogin from './AdminLogin';
import CRMDashboard from './CRMDashboard';
import { supabase } from '../lib/supabase';

export default function AdminApp() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [adminName, setAdminName] = useState('');
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    // Check if admin is already logged in
    const adminData = localStorage.getItem('admin_session');
    if (adminData) {
      const { name } = JSON.parse(adminData);
      setAdminName(name);
      setIsAuthenticated(true);
    }
  }, []);

  const handleLogin = async (email: string, password: string): Promise<boolean> => {
    setLoading(true);
    
    try {
      // In a real app, you'd hash the password and compare with database
      // For demo purposes, we'll use simple validation
      if (email === 'admin@dailycreativedesigns.com' && password === 'admin123') {
        const adminData = {
          email,
          name: 'Admin User',
          loginTime: new Date().toISOString()
        };
        
        localStorage.setItem('admin_session', JSON.stringify(adminData));
        setAdminName(adminData.name);
        setIsAuthenticated(true);
        return true;
      }
      
      return false;
    } catch (error) {
      console.error('Login error:', error);
      return false;
    } finally {
      setLoading(false);
    }
  };

  const handleLogout = () => {
    localStorage.removeItem('admin_session');
    setIsAuthenticated(false);
    setAdminName('');
  };

  if (!isAuthenticated) {
    return <AdminLogin onLogin={handleLogin} loading={loading} />;
  }

  return <CRMDashboard onLogout={handleLogout} adminName={adminName} />;
}