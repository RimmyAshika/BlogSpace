import { useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { Container, Logo, LogoutBtn } from '../index';
import { useState } from 'react';

function Header() {
    const [navopen, setnavOpen] = useState(false)
    const authStatus = useSelector((state) => state.auth.status);
    const navigate = useNavigate();

    const handlenavopen = () => {
        setnavOpen(!navopen);
    }

    const navItems = [
        {
            name: 'Home',
            slug: '/',
            active: true,
        },
        {
            name: 'Login',
            slug: '/login',
            active: !authStatus,
        },
        {
            name: 'Signup',
            slug: '/signup',
            active: !authStatus,
        },
        {
            name: 'My Posts',
            slug: '/my-posts',
            active: authStatus,
        },
        {
            name: 'Add Post',
            slug: '/add-post',
            active: authStatus,
        },
    ];

    return (
        <header className="py-3 sticky top-0 z-20 shadow-lg bg-white bg-opacity-20 backdrop-filter backdrop-blur-lg">
            <Container>
                <nav className="flex items-center justify-between">
                    <div className="flex items-center justify-center gap-3">
                        <Link to="/" className='flex items-center gap-2'>
                            <Logo />
                        <span className='text-2xl font-medium'>BlogSpace</span>
                        </Link>
                    </div>
                    <div className='relative md:hidden  transition-all duration-500' onClick={handlenavopen}>
                        {navopen ? <i className="fa-solid fa-xmark"></i> : <i className="fa-solid fa-bars"></i>}
                    </div>
                    <ul className={`${navopen ? 'flex flex-col right-0 top-16' : '-right-[450px] flex flex-col top-0 gap-7'} md:hidden -z-20 transition-all duration-500 bg-white bg-opacity-90 backdrop-filter backdrop-blur-lg items-center right-0 p-10 gap-7 w-full absolute md:gap-4`}>
                        {navItems.map((item) =>
                            item.active ? (
                                <li key={item.name}>
                                    <button
                                        onClick={() => {
                                            navigate(item.slug)
                                            setnavOpen(false)
                                        }}
                                        className="inline-bock py-2 px-3 rounded-full"
                                    >
                                        {item.name}
                                    </button>
                                </li>
                            ) : null
                        )}
                        {authStatus && (
                            <li>
                                <LogoutBtn />
                            </li>
                        )}
                    </ul>
                    <ul className='md:flex items-center hidden gap-4'>
                    {navItems.map((item) =>
                            item.active ? (
                                <li key={item.name}>
                                    <button
                                        onClick={() => navigate(item.slug)}
                                        className="inline-bock py-2 px-3 transition-all duration-500 hover:bg-slate-800 hover:text-white rounded-full"
                                    >
                                        {item.name}
                                    </button>
                                </li>
                            ) : null
                        )}
                        {authStatus && (
                            <li>
                                <LogoutBtn />
                            </li>
                        )}
                    </ul>
                </nav>
            </Container>
        </header>
    );
}

export default Header;
