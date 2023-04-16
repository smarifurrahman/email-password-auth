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
            <h4 className='text-primary'>Please Register</h4>
            <form onSubmit={handleSubmit}>
                <input className="px-4 form-control" onChange={handleChange} type="email" name="email" id="email" placeholder="Your Email" />
                <br />
                <input className="px-4 form-control" onBlur={handleBlur} type="password" name="password" id="password" placeholder="Your Password" />
                <br />
                <input className='btn btn-primary' type="submit" value="Register" />
            </form>
        </div>
    );
};

export default Register;