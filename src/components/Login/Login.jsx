import React, { useState } from 'react';

const Login = () => {

    const [errorMessage, setErrorMessage] = useState('');
    const [successMessage, setSuccessMessage] = useState('');

    const handleLogin = event => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password);

        // validate password
        setSuccessMessage('');
        setErrorMessage('');

        if (!/(?=.*[A-Z])/.test(password)) {
            setErrorMessage('Please add at least one uppercase');
            return;
        }

        else if (!/(?=.*[a-z])/.test(password)) {
            setErrorMessage('Please add at least one lowecase');
            return;
        }

        else if (!/(?=.*[0-9].*[0-9])/.test(password)) {
            setErrorMessage('Please add at least two numbers');
            return;
        }

        else if (!/(?=.*[!@#$&*])/.test(password)) {
            setErrorMessage('Please add at least one special character');
            return;
        }

        else if (password.length < 6) {
            setErrorMessage('Please add at least 6 characters');
            return;
        }
    }

    return (
        <div className='w-75 mx-auto'>
            <h2 className='text-primary text-center'>Please Login</h2>

            {errorMessage === '' || <p className='text-danger mt-3'>{errorMessage}</p>}
            {successMessage === '' || <p className='text-success mt-3'>{successMessage}</p>}

            <form onSubmit={handleLogin}>
                <div className="form-group mb-3">
                    <label htmlFor="email">Email</label>
                    <input type="email" className="form-control mt-1" name="email" id="email" placeholder="Enter email" required />
                </div>
                <div className="form-group mb-3">
                    <label htmlFor="password">Password</label>
                    <input type="password" className="form-control mt-1" name="password" id="password" placeholder="Password" required />
                </div>
                <div className="form-check mb-3">
                    <input type="checkbox" className="form-check-input" name="rememberMe" id="rememberMe" />
                    <label className="form-check-label" htmlFor="rememberMe">Remember me</label>
                </div>
                <button type="submit" className="btn btn-primary">Login</button>
            </form>
        </div>
    );
};

export default Login;