import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import axios from 'axios';

// Components //
import Container from '../components/Container';
import BackButton from '../components/BackButton';

// Styles //
import styles from '../Styles/views/Single.module.scss';

const Single = () => {
    const [country, setCountry] = useState(null);
    const { name } = useParams();
    console.log(name);

    useEffect(() => {
        getCountry();
    }, []);

    const getCountry = async () => {
        try {
            const { data } = await axios.get(
                `https://restcountries.com/v3.1/name/${name}`
            );
            console.log(data);
            setCountry(data);
        } catch (error) {}
    };

    return (
        <main>
            <Container>
                <Link to="/">
                    <BackButton />
                </Link>
                <div>
                    <div>
                        <img src={country && country[0].flags.svg} alt="" />
                    </div>
                    <div>
                        <h2>{country && country[0].name.common}</h2>
                    </div>
                </div>
                <h1>Single</h1>
            </Container>
        </main>
    );
};

export default Single;
