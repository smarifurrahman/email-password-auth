import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';
import React, { useState } from 'react';
import app from '../../firebase/firebase.config';
import { Link } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';

const auth = getAuth(app);

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

        signInWithEmailAndPassword(auth, email, password)
            .then(result => {
                const loggedUser = result.user;
                console.log(loggedUser);
                
                if (!loggedUser.emailVerified) {
                    verifyError();
                }
                else if (loggedUser.emailVerified) {
                    verifySuccess();
                }

                setSuccessMessage('');
                setSuccessMessage('Login Successful');
            })
            .catch(error => {
                setErrorMessage(error.message);
            })
    }

    const verifyError = () => {
        toast.error('Please verify your email!', {
            position: "top-right",
            autoClose: 2000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "colored",
        });
    }

    const verifySuccess = () => {
        toast.success('Login Success with verified email!', {
            position: "top-right",
            autoClose: 2000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "colored",
        });
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
            <p className='mt-2'><small>New to this website? Please <Link to="/register">Register Here.</Link></small></p>
            <ToastContainer />
        </div>
    );
};

export default Login;