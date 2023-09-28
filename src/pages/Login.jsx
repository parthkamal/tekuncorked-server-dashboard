import React, { useState } from 'react';
import '../App.css';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const Login = () => {

    const navigate = useNavigate();

    const [name, setName] = useState('');
    const [location, setLocation] = useState('');


    const getDevice = async () => {

        try {
            const URL = `http://localhost:9000/device/name`;

            const params = { name, location }
            const response = await axios.get(URL, { params });
            const device = response.data.device;

            const id = device._id;
            const REDIRECT_URL = `/home/${id}`;
            navigate(REDIRECT_URL);

        } catch (error) {
            console.log(error);
        }



    }


    const handleSubmit = (event) => {
        event.preventDefault();

        // check the values; 

        if (name && location) {
            getDevice();
        } else {
            alert('please enter all the required fields');
        }

    }


    const redirectRegister = (e) => {
        e.preventDefault();
        navigate('/register');
    }



    return (
        <div className='login-outer'>

            <h2>Device Login: </h2>
            <form className='login-form'>
                <div className='form-item'>
                    <label htmlFor="name">name:</label>
                    <input
                        type="text"
                        name='name'
                        id='name'
                        value={name}
                        onChange={(e) => setName((prev) => e.target.value)}
                        placeholder='name'
                    />
                </div>
                <div className='form-item'>
                    <label htmlFor="location">location:</label>
                    <input
                        type="text"
                        name='location'
                        id='location'
                        value={location}
                        onChange={(e) => setLocation((prev) => e.target.value)}
                        placeholder='location'
                    />
                </div>
                <div className='home-form-btn'>
                    <button type="submit" onClick={handleSubmit}>Login</button>
                    <button type="click" onClick={redirectRegister}>register</button>

                </div>
            </form>
        </div>
    );
}

export default Login;

// js modules in from 2017 , for common js module like node we use require and module.exports

