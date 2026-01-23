import { authClient } from '@/lib/auth-client';
import { cookies } from 'next/headers';
import React from 'react';

const Home = async() => {
    // const session = await authClient.getSession();   // always return null in server component

    const cookieStore = await cookies();
    const res = await fetch("http://localhost:8000/api/auth/get-session", {
        headers:{
            cookie: cookieStore.toString()
        },
        cache: "no-store"
    })
    const session = await res.json();
    console.log("session from home", session);
    return (
        <div>
            This is home page
        </div>
    );
};

export default Home;