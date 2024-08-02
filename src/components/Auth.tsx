import { FC, useEffect, useState } from 'react';
import Login from './Login';
import CompleteRigister from './CompleteRigister';
import Register from './Register';
import AuthContext from './AuthContext';
import Logo from '../ul/logo';
import Buttons from '../ul/buttons';
import crossSVG from '../svg/crossSVG';


interface AuthProps {
  btnClose: () => void
}


export const Auth: FC<AuthProps> = ({ btnClose }) => {
  const [page, setPage] = useState('login');
  const [isLoginScreen, setIsLoginScreen] = useState(page);

  const toggleScreen = (value: string) => {
    setIsLoginScreen(value);
  };

  useEffect(() => {
      setPage(isLoginScreen);
  }, [isLoginScreen]);

  

  return (
    <AuthContext.Provider value={{ isLoginScreen, toggleScreen, btnClose }}>
      <div id='auth' className='flex flex-col px-10' >
          <Buttons btn={true} className="absolute p-[15px] top-0 right-0 md:-right-16 bg-whiteCustom dark:bg-blackCustom rounded-3xl" onClick={() => btnClose()}>
              {crossSVG({ classname: "cursor-pointer fill-blackCustom dark:fill-whiteCustom" })}
          </Buttons>
          <Logo classname='mb-8 text-3xl font-bold bg-gradient-to-r from-[#6A5DC2]  to-[#DC5DFC] inline-block bg-clip-text text-transparent mx-auto select-none' children='CinemaGuide' />
          {page === 'login' ? <Login /> : page === 'register' ? <Register /> : <CompleteRigister />}
      </div>
    </AuthContext.Provider>
  );
};

export default Auth;



        