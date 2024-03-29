import React, { useState } from 'react';
import './Login.scss';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
const Login = (props) => {

    const nagivate = useNavigate();
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const validateEmail = (email) => {
        return String(email)
            .toLowerCase()
            .match(
                /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
            );
    };
    const handleLogin = () => {
        const email = 'abc123@gmail.com';
        const pass = 'abc';
        const isValidateEmail = validateEmail(email);
        if (!isValidateEmail) {

            toast.error('invalid email');
            return;
        }
        if (username !== email) {
            toast.error('invalid email');
            return;
        }
        if (password !== pass) {
            toast.error('invalid password');
            return;
        }
        if (username === email && password === pass) {
            toast.success('login success');


            // Sau đó, điều hướng sang trang user
            nagivate('/ListUser');
            return;
        }

    }
    return (
        <>
            <h1>Loginnnnnnnnnnnnn</h1>

            <div className='login-container'>
                <form id="myform" className="login-form form " name="login">
                    <h2>Đăng nhập</h2>
                    <input
                        className="form-group"
                        type="text"
                        placeholder="Tên người dùng"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}

                    />
                    <input
                        className="form-group"
                        type="password"
                        placeholder="Mật khẩu"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                    <button className='btn-lg ' onClick={handleLogin}>Đăng nhập</button>
                    <hr />
                    <br />
                    <Link to='/register'>Don't have account </Link>
                </form>
            </div >
        </>
    );
}
export default Login