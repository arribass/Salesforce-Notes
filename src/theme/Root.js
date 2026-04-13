import React from 'react';
import AuthProvider from '@site/src/utils/AuthProvider';

export default function Root({ children }) {
  return (
    <AuthProvider>
      {children}
    </AuthProvider>
  );
}
