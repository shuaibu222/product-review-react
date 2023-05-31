import React from 'react';
import { Outlet } from 'react-router-dom';
import Navigation from '../components/Navigation';

const Shared = () => {
  return (
    <main>
      <Navigation />
      <Outlet />
    </main>
  );
};

export default Shared;
