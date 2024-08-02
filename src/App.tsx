import { BrowserRouter, Route, Routes } from "react-router-dom";
import { FC, useEffect, useRef, useState } from 'react';
import Header from './components/HeaderPage';
import GenresList from "./pages/Genres/GenresList";
import Profile from './pages/Profile/Profile';
import Footer from './components/Footer';
import Error from './pages/Error/Error';
import Main from './pages/Main/Main';
import './normalize.css';
import { UseActions } from "./hooks/useActions";
import { store } from "./store";



const App: FC = () => {
  const items = [
    {
      key: '',
      label: <div className="text-blackCustom dark:text-whiteCustom">Главная</div>,
    },
    {
      key: 'Genres',
      label: <div className="text-blackCustom dark:text-whiteCustom">Жанры</div>,
    },
  ];
  
  const { fetchUser } = UseActions();

  const [profile, setProfile] = useState(store.getState().user.profile)

  const prevProfileRef = useRef(profile);

  useEffect(() => {
    fetchUser();
    const unsubscribe = store.subscribe(() => {
      const currentProfile = store.getState().user.profile;
      if (currentProfile !== prevProfileRef.current) {
        setTimeout(() => {
          setProfile(currentProfile);
          prevProfileRef.current = currentProfile;
        }, 100);
        
      }
    });
    return () => {
      unsubscribe();
    };
  }, []);
  
  return (
    <div className=" bg-whiteCustom dark:bg-blackGenretitleCustom font-play ">    
      <BrowserRouter>
      <Header items={items} />
        <Routes>
            <Route path="/movie/:movieId?" Component={Main} />
            <Route path="/" Component={Main} />
            <Route path="/genres/:genre?/:count?/:page?/:title?" Component={GenresList} />
            <Route path="/profile" Component={profile ? Profile : Error} />
            <Route path="*" Component={Error} />
          </Routes>
          <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
