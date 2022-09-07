import React from 'react';
import Banner from '../../components/Banner/Banner';
import Footer from '../../components/Footer/Footer';
import Header from '../../components/Header/Header';

const Home = () => {
    return (
        <div>
            <Header></Header>
            <Banner></Banner>
            <h1 className=' text-center p-12 m-12'>Home</h1>
            <Footer></Footer>
        </div>
    );
};

export default Home;