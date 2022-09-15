import React from 'react';
import Banner from '../../components/Banner/Banner';
import Footer from '../../components/Footer/Footer';
import Header from '../../components/Header/Header';
import Parts from '../../components/Parts/Parts';
import Reviews from '../../components/Reviews/Reviews';

const Home = () => {
    return (
        <div>
            <Header></Header>
            <Banner></Banner>
            <Parts></Parts>
            <Reviews></Reviews>
            <Footer></Footer>
            {/* <h1 className=' text-center p-12 m-12'>Home</h1> */}
        </div>
    );
};

export default Home;