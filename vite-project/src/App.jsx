import React, { useEffect } from 'react'
import Home from './pages/Home/Home'
import { Routes, Route, useNavigate } from 'react-router-dom'
import Login from './pages/Login/Login'
import { onAuthStateChanged } from 'firebase/auth'
import {auth} from './firebase'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Premium from './pages/Premium/premium';
// import Navbar from './component/Navbar/Navbar';

const App = () => {

    const navigate = useNavigate();

    useEffect(()=> {
        onAuthStateChanged(auth, async (user)=>{
            if(user) {
                console.log("Logged In");
                navigate('/');
            } else {
                console.log("Logged Out");
                navigate('/login');
            }
        })
    },[])



    return (
        <div>
            <ToastContainer theme='dark' />
            <Routes>
                <Route path='/premium' element={<Premium />} />
                <Route path='/' element={<Home/>}/>
                <Route path='/login' element={<Login/>} />
            </Routes>
        </div>
    )
}
export default App
