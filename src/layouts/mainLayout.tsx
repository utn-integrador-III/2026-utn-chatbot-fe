// src/layouts/MainLayout.tsx
import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../components/navbar';
import SecondNavbar from '../components/second-navbar';
import Chat from '../components/chat';
import Footer from '../components/footer';

const MainLayout: React.FC = () => {
  return (
    <>
      <Navbar />
      <SecondNavbar />
      {/* Aquí van las páginas "normales" */}
      <Outlet />
      <Chat />
      <Footer />
    </>
  );
};

export default MainLayout;
