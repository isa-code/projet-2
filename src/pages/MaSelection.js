import React from 'react';
import { Link } from 'react-router-dom';
import Footer from '../components/Footer'

const MaSelection = () => {
    return (
        <>
            <h1>Ma selection</h1>
            <Link to={'/'}>
                Logo here
            </Link>
            <Footer />
        </>
    )
};

export default MaSelection;