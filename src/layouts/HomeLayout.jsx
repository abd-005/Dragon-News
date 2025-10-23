import React from 'react';
import { Outlet } from 'react-router';
import Header from '../components/Header';
import LatestNews from '../components/LatestNews';
import Navbar from '../components/Navbar';

const HomeLayout = () => {
    return (
        <div>
            <header>
                <Header></Header>
            </header>
            <section className='w-11/12 mx-auto my-3'>
                <LatestNews></LatestNews>
            </section>
            <nav className='w-11/12 mx-auto my-3'>
                <Navbar></Navbar>
            </nav>
            <main>
                <section className='left-nev'></section>
            <section className='main'>
                <Outlet/>
            </section>
            <section className='right-nev'></section>
            </main>
        </div>
    );
};

export default HomeLayout;