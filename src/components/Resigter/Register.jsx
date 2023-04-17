import React, { useState } from 'react';
import { createUserWithEmailAndPassword, getAuth, sendEmailVerification, updateProfile } from "firebase/auth";
import app from '../../firebase/firebase.config';
import { Link } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import { notifyWarning } from '../../toastify/toastify';

const auth = getAuth(app);


const Register = () => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const [errorMessage, setErrorMessage] = useState('');
    const [successMessage, setSuccessMessage] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        setSuccessMessage('');
        setErrorMessage('');

        const email = e.target.email.value;
        const password = e.target.password.value;
        const name = e.target.name.value;
        console.log(name, email, password);

        // validate password 
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


        // create user in firebase
        createUserWithEmailAndPassword(auth, email, password)
            .then(result => {
                const loggedUser = result.user;
                console.log(loggedUser);
                setSuccessMessage('User has been created successfully.');
                updateUserData(loggedUser, name);
                emailVerification(loggedUser);
            })
            .catch(error => {
                console.error(error.message);
                setErrorMessage(error.message);
            });
    }

    const emailVerification = (user) => {
        sendEmailVerification(user)
            .then(() => {
                notifyWarning('Please verify your email!');
            })
            .catch(error => {
                console.error(error.message);
                setErrorMessage(error.message);
            })
    }

    const updateUserData = (user, name) => {
        updateProfile(user, {
            displayName: name
        })
            .then(() => {
                console.log('user name updated');
            })
            .catch(error => {
                setErrorMessage(error.message);
            })
    }

    // const handleChange = (e) => {
    //     // console.log(e.target.value);
    //     setEmail(e.target.value);
    // }

    // const handleBlur = (e) => {
    //     // console.log(e.target.value);
    //     setPassword(e.target.value);
    // }

    return (
        <div className='w-75 mx-auto'>
            <h2 className='text-primary text-center mb-3'>Please Register</h2>

            {errorMessage === '' || <p className='text-danger mt-2'>{errorMessage}</p>}
            {successMessage === '' || <p className='text-success mt-2'>{successMessage}</p>}

            <form onSubmit={handleSubmit}>
                <input className="px-4 form-control" type="name" name="name" id="name" placeholder="Your Name" required />
                <br />
                <input className="px-4 form-control" type="email" name="email" id="email" placeholder="Your Email" required />
                <br />
                <input className="px-4 form-control" type="password" name="password" id="password" placeholder="Your Password" required />
                <br />
                <input className='btn btn-primary' type="submit" value="Register" />
            </form>
            <p className='mt-2'><small>Already have an account? Please <Link to="/login">Login Here.</Link></small></p>
            <ToastContainer />
        </div>
    );
};

export default Register;