import Navbar from '@/components/layout/navbar';
import React from 'react';

const MainLayout = ({children}: {children: React.ReactNode}) => {
    return (
        <div>
            <nav><Navbar/></nav>
            {children}
        </div>
    );
};

export default MainLayout;