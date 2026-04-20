import React from 'react';
import AuthProvider from '@site/src/utils/AuthProvider';

import { Toaster } from 'sonner';

export default function Root({ children }) {
  return (
    <AuthProvider>
      <Toaster richColors position="top-right" theme="dark" closeButton />
      {children}
    </AuthProvider>
  );
}
