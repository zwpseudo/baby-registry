import React from 'react';
import BabyShowerInvitation from '../components/BabyShowerInvitation';

const Home: React.FC = () => {
  return (
    <div className="min-h-screen w-full flex items-center justify-center p-2 sm:p-4 bg-white overflow-hidden">
      <BabyShowerInvitation />
    </div>
  );
};

export default Home;
