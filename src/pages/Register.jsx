import React , {useState} from 'react';
import '../App.css';

const Register = () => {

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
            <h2>Device Register: </h2>
                <form onSubmit={handleSubmit} className='login-form'>
                <div className='form-item'>
                    <label htmlFor="username">Username:</label>
                    <input
                        type="text"
                        id="username"
                        name="username"
                        value={username}
                        onChange={(e) => setUsername((username) => e.target.value)}
                        placeholder='username here'
                    />
                </div>
                <div className='form-item'>
                    <label htmlFor="password">Password:</label>
                    <input
                        type="password"
                        id="password"
                        name="password"
                        value={password}
                        onChange={(e) => setPassword((password) => e.target.value)}
                        placeholder='create password'
                    />
                </div>
                <div className='form-btn'>
                    <button type="submit">Register</button>
                </div>
            </form>
            {isLoggedIn && <p>Welcome, {this.state.username}!</p>}
        </div>
    );
}

export default Register;
