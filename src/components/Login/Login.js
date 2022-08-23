import React from 'react';
import './Login.css';
import useFirebase from '../../hooks/useFirebase';

const Login = () => {
    const { signInWithGoogle } = useFirebase();
    return (
        <div>
            <h2>Please Login</h2>
            <div style={{ margin: '20px' }}>
                <button onClick={signInWithGoogle}>Google sign in</button>
            </div>
            <form>
                <input type="email" placeholder="Your Email" />
                <br />
                <input type="password" placeholder='password' name="" id="" />
                <br />
                <input type="submit" value="Login" />
            </form>
        </div>
    );
};

export default Login;