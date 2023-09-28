import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';

const Home = () => {

    const navigate = useNavigate();


    const [device, setDevice] = useState({});
    const [temperature1, setTemperature1] = useState(0);
    const [temperature2, setTemperature2] = useState(0);
    const [temperature3, setTemperature3] = useState(0);

    const {id} = useParams();
    


    async function getDevice() {

        try {
            const URL = `http://localhost:9000/device/${id}`;

            const response = await axios.get(URL);
            const data = response.data;
            setDevice(data);
            setTemperature1(data.temperature1);
            setTemperature2(data.temperature2);
            setTemperature3(data.temperature3);
            console.log(data);

        } catch (error) {
            console.log(error);
        }
    }


    const updateDevice = async (event) => {
        event.preventDefault();
        console.log('update device run hua')
        const location = device.location;
        const name = device.name;

        const newDevice = { name, location, temperature1, temperature2, temperature3 };

        try {

            const URL = `http://localhost:9000/device/${device._id}`;
            const message = await axios.put(URL, newDevice);
            console.log(message);
            alert(message.data.message);
        } catch (error) {
            console.log(error);
        }
    }

    const deleteDevice = async (e) => {
        e.preventDefault();

        try {
            const URL = `http://localhost:9000/device/${device._id}`;
            const message = await axios.delete(URL);
            console.log(message);
            alert(message.data.message);
            navigate(-1);
        } catch (error) {
            console.log(error);

        }

    }


    const redirectLogin = (e) => {
        e.preventDefault();
        navigate('/');
    }


    useEffect(() => {
        console.log('page render ho gya')
        getDevice();
    }, []);





    return (
        <div className='login-outer'>

            <h2>{`Welcome ${device.name}`} </h2>

            <div>{`location: ${device.location}`}</div>
            <form className='login-form'>
                <div className='form-item'>
                    <label htmlFor="temperature1">temperature1:</label>
                    <input
                        type="text"
                        value={temperature1}
                        placeholder='temperature1'
                        onChange={(e) => setTemperature1(prev => e.target.value)}
                    />
                </div>

                <div className='form-item'>
                    <label htmlFor="temperature2">temperature2:</label>
                    <input
                        type="text"
                        value={temperature2}
                        placeholder='temperature2'
                        onChange={(e) => setTemperature2(prev => e.target.value)}
                    />
                </div>

                <div className='form-item'>
                    <label htmlFor="temperature3">temperature3:</label>
                    <input
                        type="text"
                        value={temperature3}
                        placeholder='temperature3'
                        onChange={(e) => setTemperature3(prev => e.target.value)}
                    />
                </div>

                <div className='main-form-btn'>
                    <button type="submit" onClick={updateDevice}>update </button>
                    <button type="submit" onClick={deleteDevice}>delete device</button>
                    <button type="submit" onClick={redirectLogin}>login</button>

                </div>
            </form>
        </div>
    );
}

export default Home;
