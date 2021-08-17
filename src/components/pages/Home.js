import React from 'react'
import CardList from '../CardList';
import Footer from '../Footer';
import HeaderPanel from '../HeaderPanel';

const Home = () => {
    return (
        <>
            <HeaderPanel page="Home"/>
            <CardList />
            <Footer />
        </>
    )
}

export default Home
