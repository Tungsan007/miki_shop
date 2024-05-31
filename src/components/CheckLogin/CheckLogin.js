import { useRouter } from 'next/router';
import React, { useEffect } from 'react';
import { useRecoilValue } from 'recoil';
import { dataUser } from 'src/recoils/dataUser';

function CheckLogin(props) {
  const router = useRouter();
  const user = useRecoilValue(dataUser);

  console.log(props);
  useEffect(() => {
    // check for loginPage
    if (props === 'login') {
      if (!user?.role) {
        router.replace('/login');
      }
      if (user?.role) {
        router.replace('/');
      }
    }

    // check for registerPage
    if (props === 'register') {
      if (!user?.role) {
        router.replace('/register');
      }
      if (user?.role) {
        router.replace('/');
      }
    }

    // check for adminPage
    if (props === 'admin') {
      if (!user?.role) {
        router.replace('/login');
      }
      if (user?.role === 'admin') {
        router.replace('/admin');
      }
      if (user?.role !== 'admin') {
        router.replace('/');
      }
    }
  }, []);
}

export default CheckLogin;
