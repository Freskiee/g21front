
import { FaSignInAlt, FaSignOutAlt, FaUser } from 'react-icons/fa';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { logout, reset } from '../features/auth/authSlice';

export const Header = () => {

    const navigate = useNavigate()
    const dispatch = useDispatch()

    const { user } = useSelector((state) => state.auth)

    const onLogout = () => {
        dispatch(logout())
        dispatch(reset())
        navigate('/login')

    }

    return (
        <>
            <header className='header'>
                <div className="logo">
                    <Link to='/'>App de Tareas</Link>
                </div>
                <ul>

                    {user ? (
                        <>
                            <button
                                className='btn'
                                onClick={onLogout}
                            >
                                <FaSignOutAlt /> Logout
                            </button>
                        </>

                    ) : (

                        <>
                            <li>
                                <Link to='/login'>
                                    <FaSignInAlt /> Login
                                </Link>
                            </li>
                            <li>
                                <Link to='/register'>
                                    <FaUser /> Registrar
                                </Link>
                            </li>
                        </>

                    )}


                </ul>
            </header>
        </>
    )
}

