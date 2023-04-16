import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../Header/Header';

const Main = () => {
    return (
        <div className='d-flex flex-column align-items-center'>
            <Header></Header>
            <Outlet></Outlet>
        </div>
    );
};

export default Main;