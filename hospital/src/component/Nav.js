import React from 'react'
import '../styles/nav.css'
// import {BsBagCheck} from 'react-icons/bs';
import {Link} from 'react-router-dom'
import { useNavigate } from 'react-router-dom';

const Nav = () => {
    let navigate = useNavigate();

    const Logout = async () => {
    const response = await fetch(`http://localhost:3002/api/logout`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                // body: JSON.stringify({
                //     email,
                //     password,
                //     username, 
                //     userType
                // }),
                credentials: 'include'
            })
            navigate('/register')
        }
  return (
    <>
    <div className='main-header'>
        <div className='container'>
            <div className='logo'>
                <img src='./images/logo.png' alt='logo' ></img>
                <p className='logo-header'>HEAL EAZY</p>
            </div>

            <div className='header'>
                <div className='container'>
                    <div className='nav'>
                        <ul>
                            <li>
                                <Link to='/' className='link'>Home</Link>
                            </li>
                            <li>
                                <Link to='/admin' className='link'>Admin</Link>
                            </li>
                            <li>
                                <Link to='/doctor' className='link'>Doctor</Link>
                            </li>
                            <li>
                                <Link to='/patient' className='link'>Patient</Link>
                            </li>
                            <li>
                                <Link to='/register' className='link'>Sign-In/Up</Link>
                            </li>
                            <li>
                                <button onClick={() => Logout()} className='logoutbtn'>logout</button>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>       
        </div>
    </div>
    </>
  )
}

export default Nav