import React, { useState } from 'react';
import '../App.css';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Register = () => {

    const navigate = useNavigate();

    const [name, setName] = useState('');
    const [location, setLocation] = useState('');
    const [temperature1, setTemperature1] = useState(0);
    const [temperature2, setTemperature2] = useState(0);
    const [temperature3, setTemperature3] = useState(0);


    const createDevice = async (newDevice) => {

        try {
            const URL = `http://localhost:9000/device`;
            const response = await axios.post(URL, newDevice);
            console.log(response.data);
            const createdDevice = response.data.device[0];
            console.log(createDevice);
            const id = createdDevice._id;
            const REDIRECT_URL = `/home/${id}`;

            // alert(response.data.message);

            navigate(REDIRECT_URL);
        } catch (error) {

            console.log(error);
        }
    }


    const handleSubmit = (event) => {
        event.preventDefault();

        if (name && location && (!isNaN(temperature1)) && (!isNaN(temperature2)) && (!isNaN(temperature3))) {
            const newDevice = { name, location, temperature1, temperature2, temperature3 };
            createDevice(newDevice);

        } else {
            alert('please enter the details correctley ie name and location required and temperatures should be required and a number');
        }

    }

    const redirectLogin = (e) => {
        e.preventDefault();
        navigate('/');
    }
    return (
        <div className='login-outer'>
            <h2>Device Register: </h2>
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
                <div className='form-item'>
                    <label htmlFor="temperature1">temperature1:</label>
                    <input
                        type='text'
                        value={temperature1}
                        id='temperature1'
                        name='temperature1'
                        onChange={(e) => setTemperature1((prev) => e.target.value)}
                        placeholder='temperature1'
                    />
                </div>
                <div className='form-item'>
                    <label htmlFor="temperature2">temperature2:</label>
                    <input
                        type='text'
                        value={temperature2}
                        name='temperature2'
                        id='temperature2'
                        onChange={(e) => setTemperature2((prev) => e.target.value)}
                        placeholder='temperature2'
                    />
                </div>
                <div className='form-item'>
                    <label htmlFor="password">temperature3:</label>
                    <input
                        type='text'
                        id="temperature3"
                        name="temperature3"
                        value={temperature3}
                        onChange={(e) => setTemperature3((prev) => e.target.value)}
                        placeholder='temperature3'
                    />
                </div>
                <div className='home-form-btn'>
                    <button type="submit" onClick={handleSubmit}>register </button>
                    <button type="submit" onClick={redirectLogin}>login</button>
                </div>
            </form>
        </div>
    );
}

export default Register;
