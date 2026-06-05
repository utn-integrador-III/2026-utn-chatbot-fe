// src/layouts/AuthLayout.tsx
import React from 'react';
import { Outlet } from 'react-router-dom';

const AuthLayout: React.FC = () => {
  return (
    <div>
      {/* Aquí se renderea el contenido de las rutas hijas */}
      <Outlet />
    </div>
  );
};

export default AuthLayout;
