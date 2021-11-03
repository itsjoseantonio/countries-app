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

    useEffect(() => {
        getCountry();
    }, []);

    const getCountry = async () => {
        try {
            const { data } = await axios.get(
                `https://restcountries.com/v3.1/name/${name}`
            );
            setCountry(data);
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <main className={styles.main}>
            <Container>
                <div className={styles.main__back}>
                    <Link to="/">
                        <BackButton />
                    </Link>
                </div>
                {country && (
                    <div className={styles.content}>
                        <div className={styles.content__image}>
                            <img
                                src={country[0].flags.svg}
                                alt={country[0].name.common}
                            />
                        </div>
                        <div className={styles.content__info}>
                            <h2>{country[0].name.common}</h2>
                            <ul>
                                <li>
                                    <span>Native name: </span>
                                    {country[0].name.common}
                                </li>
                                <li>
                                    <span>Population: </span>
                                    {country[0].population}
                                </li>
                                <li>
                                    <span>Region: </span>{' '}
                                    {country[0].name.common}
                                </li>
                                <li>
                                    <span>Sub Region: </span>{' '}
                                    {country[0].region}
                                </li>
                                <li>
                                    <span>Capital: </span>{' '}
                                    {country[0].capital[0]}
                                </li>
                                <li>
                                    <span>Top Level Domain: </span>
                                    {country[0].tld[0]}
                                </li>
                                <li>
                                    <span>Currencies: </span>
                                    {country[0].name.common}
                                </li>
                                <li>
                                    <span>Languages: </span>
                                    {country[0].name.common}
                                </li>
                            </ul>
                            <div className={styles.content__info__borders}>
                                <p>
                                    Borders:{' '}
                                    {country[0].borders.map((item, i) => (
                                        <span key={i}>{item}</span>
                                    ))}
                                </p>
                            </div>
                        </div>
                    </div>
                )}
            </Container>
        </main>
    );
};

export default Single;
