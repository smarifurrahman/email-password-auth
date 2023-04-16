import React from 'react';

const Login = () => {
    return (
        <div className='w-75 mx-auto'>
            <h2 className='text-primary text-center'>Please Login</h2>
            <form>
                <div className="form-group mb-3">
                    <label htmlFor="email">Email</label>
                    <input type="email" className="form-control mt-1" name="email" id="email" placeholder="Enter email" />
                </div>
                <div className="form-group mb-3">
                    <label htmlFor="password">Password</label>
                    <input type="password" className="form-control mt-1" name="password" id="password" placeholder="Password" />
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