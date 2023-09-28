import { useState } from "react";
import React from 'react';

const Home = (props) => {

    // const {_id, deviceName, password, temperature1, temperature2, tempearture3} = props.device;

    // const [username, setUsername ] = useState(props.deviceName);


    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [isLoggedIn, setIsLoggedIn] = useState(false);


    const handleSubmit = (event) => {
        event.preventDefault();

        // check the values; 

        let size_username = username.length;
        let size_password = password.length;

        if (Math.min(size_password, size_username) > 0) {
            alert('chalo ghusne ke to layak ho');

            // yaha par hm asynchronouse kam karenge, aur user_id get karlenge aur uski details. 
        } else {
            alert('Please fill in both fields.');
        }

    }

    return (
        <div className='login-outer'>
            <h2>{`welcome parth!`} </h2>

            <form onSubmit={handleSubmit} className='login-form'>
                
                <div className='form-item'>
                    <label htmlFor="username">temperature1:</label>
                    <input
                        type="text"
                        id="username"
                        name="username"
                        value={username}
                        onChange={(e) => setUsername((username) => e.target.value)}
                        placeholder='temperature1 here'
                    />
                </div>
                <div className='form-item'>
                    <label htmlFor="username">temperature2:</label>
                    <input
                        type="text"
                        id="username"
                        name="username"
                        value={username}
                        onChange={(e) => setUsername((username) => e.target.value)}
                        placeholder='temperature2 here'
                    />
                </div>
                <div className='form-item'>
                    <label htmlFor="username">temperature3:</label>
                    <input
                        type="text"
                        id="username"
                        name="username"
                        value={username}
                        onChange={(e) => setUsername((username) => e.target.value)}
                        placeholder='temperature3 here'
                    />
                </div>
                
                <div className='home-form-btn'>
                    <button type="submit">update</button>
                    <button type="submit">delete device</button>

                </div>
            </form>
        </div>
    );
}

export default Home;
