import React from 'react';
import { useAuth } from '@site/src/utils/AuthProvider';
import DefaultNavbarItem from '@theme/NavbarItem/DefaultNavbarItem';
import DropdownNavbarItem from '@theme/NavbarItem/DropdownNavbarItem';

export default function AuthProfileNavbarItem({ ...props }) {
  const { user, loading } = useAuth();

  // Show nothing while checking auth status to avoid flicker
  if (loading) return null;

  // If user is not logged in, render a simple link to login
  if (!user) {
    return (
      <DefaultNavbarItem
        {...props}
        label="Iniciar Sesión"
        to="/login"
        // Remove dropdown-specific props if they exist
        items={undefined}
        className="navbar-login-link"
      />
    );
  }

  // If user is logged in, render the dropdown as configured in docusaurus.config.js
  return <DropdownNavbarItem {...props} />;
}
