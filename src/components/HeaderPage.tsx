import  { FC, ReactElement, useEffect, useState } from 'react';
import { Link } from "react-router-dom";
import AuthModal  from './AuthModal';
import SearchFilm from './SearchFilm';
import { store } from '../store';
import { wait } from '@testing-library/user-event/dist/utils';
import HeaderProps from '../types/HeaderProps';
import ProfileProps from '../types/ProfileProps';
import Logo from '../ul/logo';
import Search from '../ul/search';
import Buttons from '../ul/buttons'; 
import search from '../svg/search';
import cross from '../svg/crossSVG';
import profileSVG from '../svg/profileSVG';
import genreSVG from '../svg/genreSVG';

const HeaderPage: FC<HeaderProps> = ({ items }): ReactElement => {   
    const [open, setOpen] = useState(false);
    const [nav, setNav] = useState(false);
 
    const handleClose = () => {
        setOpen(false);
    };
 
    const handleOpen = () => {
        setOpen(true);
    };

    const [showBtnAccount, setShowBtnAccount] = useState(false);

    const [profile, setProfile] = useState<ProfileProps | undefined>(undefined);    

    useEffect(() => {
        store.subscribe(() => {
            if (profile !== store.getState().user.profile) {
                setTimeout(() => {
                    setProfile(store.getState().user.profile);
                }, 100);
            }        
        });
        profile?.surname === undefined ? setShowBtnAccount(false) : setShowBtnAccount(true);            
    }, [ profile]);

    const handleProfile = () => {
        return showBtnAccount ? (
            <>
                <li className={'text-2xl text-blackCustom dark:text-whiteCustom hidden xl:block' + (page === 'profile' ? ' border-b-[1.5px] border-[#DC5DFC]' : '')} onClick={() => setPage('profile')}>
                    <Link to='/profile' className='w-full'>{profile?.surname}</Link>
                </li>
                <li className={'relative w-6 block xl:hidden' + (page === 'profile' ? ' xl:border-b-[1.5px] border-[#DC5DFC]' : '')} onClick={() => setPage('profile')}>
                    <Link to='/profile' className='w-full fill-blackCustom dark:fill-whiteCustom'>{profileSVG({classname:"fill-blackCustom dark:fill-whiteCustom"})}</Link>
                </li>
            </>
        ) : (
            <>
                <li className='text-2xl text-blackCustom dark:text-whiteCustom hidden xl:block'>
                    <Buttons className='' type='submit' children='Вход' onClick={() => handleOpen() } />
                </li>
                <li className='relative w-6 block xl:hidden'>
                    <Buttons className='fill-blackCustom dark:fill-whiteCustom' type='submit' children={profileSVG({classname:"fill-blackCustom dark:fill-whiteCustom"})} onClick={() => handleOpen() } />
                </li>
            </>
        );
        
    };    

    const [page, setPage] = useState('');

    useEffect(() => {
        setPage(window.location.pathname.slice(1));
    }, []);

    const [inputSearch, setInputSearch] = useState('');

    const [focusSearch, setFocusSearch] = useState(false);

    useEffect(() => {
        if (inputSearch.length > 0) {
            setFocusSearch(true);
        } else {
            setFocusSearch(false);
        }
    }, [inputSearch]);

    return (
        <header className='lg:absolute lg:top-0 w-full z-20 bg-headerCustom dark:bg-blackHeaderCustom'>
            <section className='mx-auto container p-0'>
                <div className='py-6 text-2xl'>
                    <nav className='hidden xl:block'>
                        <ul className='flex items-center justify-between gap-x-10 gap-y-5 '>
                            <Link to='/' className='mr-10 text-2xl' onClick={() => setPage('')}>
                                <Logo classname='text-[40px] select-none' children='CinemaGuide' />
                            </Link>
                            {items.map((item) => (
                                <li key={item.key} className={
                                    'text-blackCustom dark:text-whiteCustom ' + 
                                    (page === item.key ? 'border-b-[1.5px] border-[#DC5DFC]' : '')} 
                                    onClick={() => setPage(item.key)}>
                                    <Link to={item.key}>{item.label}</Link>
                                </li>  
                            ))}
                            <li 
                                className='relative mr-10 flex flex-shrink-0 flex-grow basis-0 text-blackCustom dark:text-whiteCustom bg-whiteCustom dark:bg-blackHoverCustom rounded-lg' 
                                onFocus={() => setFocusSearch(true)} 
                                onBlurCapture={() => wait(100).then(() => setFocusSearch(false))} >
                                <Search 
                                    classname='px-14 flex-shrink-0 flex-grow basis-0 h-10 text-blackCustom dark:text-whiteCustom bg-transparent' 
                                    type='search' 
                                    placeholder='Поиск' 
                                    svg={search({classname:"fill-blackCustom dark:fill-whiteCustom"})} 
                                    svgRight={cross({classname:"fill-blackCustom dark:fill-whiteCustom h-[12px] w-[12px]"})}
                                    value={inputSearch} 
                                    onChange={(e) => setInputSearch(e)}>
                                    {(inputSearch && focusSearch) && <SearchFilm searchFilm={inputSearch} />}
                                </Search>
                            </li>
                            {handleProfile()}
                        </ul>    
                    </nav>
                    <nav className={`xl:hidden w-full flex justify-between items-center`}>
                        {!nav && 
                            <Link to='/' className='mr-10 text-2xl' onClick={() => setPage('')}>
                                <Logo classname='text-[30px] -tracking-wider select-none' children='CinemaGuide' />
                            </Link>
                        }
                    <ul className={`flex ${nav ? 'w-full' : ''} items-center justify-between gap-x-5 sm:gap-x-10 gap-y-5`}>
                        {!nav && 
                            <>
                                {items.map((item) => (
                                <li key={item.key} className={
                                    'text-white ' +
                                    (item.key === "" && "hidden ") +
                                    (page === item.key ? 'border-b-[1.5px] border-[#DC5DFC]' : '')} 
                                    onClick={() => setPage(item.key)}>
                                    <Link to={item.key}>{genreSVG({classname:"fill-blackCustom dark:fill-whiteCustom"})}</Link>
                                </li>
                        ))}
                            </>
                        }
                        {nav ? (
                            <li 
                                className='relative w-full flex-shrink-0 flex-grow basis-0 text-blackCustom dark:text-whiteCustom bg-whiteCustom dark:bg-blackHoverCustom rounded-lg' 
                                onFocus={() => setFocusSearch(true)} 
                                onBlurCapture={() => wait(100).then(() => {
                                    setFocusSearch(false);
                                    setNav(false);
                            })} >
                            <Search 
                                classname='px-14 flex-shrink-0 flex-grow basis-0 w-full h-10 text-blackCustom dark:text-whiteCustom bg-transparent' 
                                type='text' 
                                placeholder='Поиск' 
                                svg={search({classname:"fill-blackCustom dark:fill-whiteCustom"})} 
                                svgRight={cross({classname:"fill-blackCustom dark:fill-whiteCustom h-[12px] w-[12px]"})}
                                value={inputSearch} 
                                onChange={(e) => setInputSearch(e)}>
                                {(inputSearch && focusSearch) && <SearchFilm searchFilm={inputSearch} />}
                            </Search>
                        </li>
                        ) : (
                            <li>
                                <button className='flex' type='submit' onClick={() => {
                                    setNav(!nav);
                                    wait(100).then(() => document.getElementById('search')?.focus());
                                } } >{search({classname:"fill-blackCustom dark:fill-whiteCustom"})}</button>
                            </li>
                        )}

                        {!nav && handleProfile()}
                    </ul>
                </nav>        
                    <AuthModal type='auth' isOpen={open} onClose={handleClose} />
                </div>
            </section>
        </header> 
    );
  };

export default HeaderPage