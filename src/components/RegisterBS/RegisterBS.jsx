import React from 'react';

const RegisterBS = () => {

    const handleSubmit = (e) => {
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;
        const check = e.target.check.value;
        console.log(email, password, check)
    }

    return (
        <div>
            <h3 className='text-center text-primary'>Please Register</h3>

            <form onSubmit={handleSubmit}>
                <div className="mb-3">
                    <label htmlFor="inputEmail1" className="form-label">Email address</label>
                    <input type="email" name="email" className="form-control" id="inputEmail1" placeholder='abc@xyz.com' aria-describedby="emailHelp" />
                </div>
                <div className="mb-3">
                    <label htmlFor="inputPassword1" className="form-label">Password</label>
                    <input type="password" placeholder='********' name="password" className="form-control" id="inputPassword1" />
                </div>
                <div className="mb-3 form-check">
                    <input type="checkbox" name="check" className="form-check-input" id="check1" />
                    <label className="form-check-label" htmlFor="check1">Accept Terms and Conditions</label>
                </div>
                <button type="submit" className="btn btn-primary">Submit</button>
            </form>
        </div>
    );
};

export default RegisterBS;