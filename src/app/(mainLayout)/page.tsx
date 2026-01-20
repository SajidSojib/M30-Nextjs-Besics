import { authClient } from '@/lib/auth-client';
import React from 'react';

const Home = async() => {
    const session = await authClient.getSession();
    console.log("session from home", session);
    return (
        <div>
            This is home page
        </div>
    );
};

export default Home;