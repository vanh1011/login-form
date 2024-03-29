import React, { useState } from 'react';
import './Login.scss';
import { toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
const Register = () => {
    const nagivate = useNavigate();
    const [email, setEmail] = useState('');
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const validateEmail = (email) => {
        return String(email)
            .toLowerCase()
            .match(
                /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
            );
    };
    const handleRegister = () => {

        const isValidEmail = validateEmail(email);
        if (!isValidEmail) {

            toast.error('invalid email');
            return;
        }
        if (!password) {

            toast.error('invalid password');
            return;
        }
        if (!username) {

            toast.error('invalid username');
            return;
        }

        if (email && username && password) {
            toast.success('A new User created success ');


            // Sau đó, điều hướng sang trang login
            nagivate('/login');
            return;
        }

    }
    return (


        <>
            <h1>Registerrrrrrrr</h1>

            <div className='login-container'>
                <form id="myform" className="login-form form " name="login">
                    <h2>Đăng Ký</h2>
                    <input
                        className="form-group"
                        type="text"
                        placeholder="Email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}

                    />
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
                    <button className='btn-lg ' onClick={handleRegister}>Đăng ký</button>
                    <hr />
                    <br />
                    <Link to='/login'>I'm have an account </Link>

                </form>
            </div >
        </>
    )
}
export default Register