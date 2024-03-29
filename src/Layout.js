
import { Routes, Route } from 'react-router-dom';
import App from './App';
import ListUser from './Component/ListUser';
import Content from './Component/content';
import HomePage from './Component/Home/HomePage';
import Login from './Component/Auth/Login';
import Register from './Component/Auth/Register';
import About from './Component/about';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css';
const Layout = (props) => {

    return (
        <>
            <Routes>
                <Route path='/' element={<App />} >
                    <Route index element={<HomePage />} />
                    <Route path='/content' element={<Content />} />
                    <Route path='/ListUser' element={<ListUser />} />
                    <Route path='/content' element={<Content />} />
                    <Route path='/about' element={<About />} />
                    <Route path='login' element={<Login />} />
                    <Route path='register' element={<Register />} />
                </Route>


            </Routes>
            <ToastContainer
                position="top-right"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
            // theme="light"

            />
        </>
    )
}

export default Layout