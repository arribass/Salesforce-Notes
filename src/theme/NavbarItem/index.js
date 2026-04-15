import React from 'react';
import NavbarItem from '@theme-original/NavbarItem';
import { useAuth } from '@site/src/utils/AuthProvider';

export default function NavbarItemWrapper(props) {
  const { user, loading } = useAuth();

  // Intercept the profile link to make it dynamic
  if (props.className === 'navbar-profile-link') {
    // Show nothing while checking auth status to avoid flicker
    if (loading) return null;

    if (!user) {
      // If the user is logged out, transform the dropdown into a simple login link
      return (
        <NavbarItem
          {...props}
          type="default"
          label="Iniciar Sesión"
          to="/login"
          // We remove the sub-items so it doesn't render as a dropdown
          items={undefined}
          // We keep the position and other relevant props
        />
      );
    }
  }

  // For all other items, or if logged in, use the default behavior
  return <NavbarItem {...props} />;
}
