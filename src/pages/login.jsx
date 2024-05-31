import { useRouter } from 'next/router';
import React, { useEffect } from 'react';
import { useRecoilValue } from 'recoil';
import CheckLogin from 'src/components/CheckLogin/CheckLogin';
import { Footer } from 'src/layouts/default';
import { dataUser } from 'src/recoils/dataUser';
import LoginFormSection from 'src/sections/auth/LoginForm';

export default function Login() {

  CheckLogin('login');

  return (
    <div className="overflow-hidden">
      <LoginFormSection />
      <Footer />
    </div>
  );
}
