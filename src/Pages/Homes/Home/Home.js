import React from 'react';
import Banner from '../Banner/Banner';
import MovieServices from '../MovieServices/MovieServices';
import useTitle from '../../../hooks/useTitle';


const Home = () => {

    useTitle('Home');

    return (
        <div>
            <Banner></Banner>
            <MovieServices></MovieServices>
        </div>
    );
};

export default Home;