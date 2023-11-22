import { useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { Container, Logo, LogoutBtn } from '../index';

function Header() {
    const authStatus = useSelector((state) => state.auth.status);
    const navigate = useNavigate();

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
            slug: '/all-posts',
            active: authStatus,
        },
        {
            name: 'Add Post',
            slug: '/add-post',
            active: authStatus,
        },
    ];

    return (
        <header className="py-3 sticky top-0 z-20 shadow-lg backdrop-filter backdrop-blur-md">
            <Container>
                <nav className="flex items-center justify-between">
                    <div className="flex items-center justify-center gap-3">
                        <Link to="/" className='flex items-center gap-2'>
                            <Logo />
                        <span className='text-2xl font-medium'>BlogSpace</span>
                        </Link>
                    </div>
                    <ul className="flex items-center gap-4">
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
