import React, { useState } from 'react';

const Register = () => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;
        console.log(email, password)
    }

    const handleChange = (e) => {
        // console.log(e.target.value);
        setEmail(e.target.value);
    }

    const handleBlur = (e) => {
        // console.log(e.target.value);
        setPassword(e.target.value);
    }

    return (
        <div>
            <h4>Please Register</h4>
            <form onSubmit={handleSubmit}>
                <input onChange={handleChange} type="email" name="email" id="email" placeholder="Your Email" />
                <br />
                <input onBlur={handleBlur} type="password" name="password" id="password" placeholder="Your Password" />
                <br />
                <input type="submit" value="Register" />
            </form>
        </div>
    );
};

export default Register;