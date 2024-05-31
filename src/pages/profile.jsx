import { useRouter } from 'next/router';
import React, { useEffect } from 'react';
import { useRecoilValue } from 'recoil';
import { Footer, Header } from 'src/layouts/default';
import { dataUser } from 'src/recoils/dataUser';
import Profile from 'src/sections/users/Profile';

function UserPage(props) {
    const router = useRouter();
    const user = useRecoilValue(dataUser)

    useEffect(() => {
        if (!user) {
            router.replace('/login')
        }

    })
    return (
        <div className='relative overflow-hidden'>
            <Header />
            <Profile user={user} />
            <Footer />


        </div>
    );
}

export default UserPage;