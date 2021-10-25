import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

// Components //
import LazyLoad from 'react-lazyload';
import SearchBox from '../components/SearchBox';
import Container from '../components/Container';
import SelectFilter from '../components/SelectFilter';
import FlagItem from '../components/FlagItem';
import Loader from '../components/Loader';

// Styles //
import styles from '../Styles/views/Home.module.scss';

const Home = () => {
    const [countries, setCountries] = useState(null);
    const [region, setRegion] = useState('');
    const [name, setName] = useState('');
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        const timeOut = setTimeout(() => {
            getAllContries();
        }, 500);

        return () => clearTimeout(timeOut);
    }, [region, name]);

    const getAllContries = async () => {
        let baseURL = 'https://restcountries.com/v3.1/all';

        if (region) baseURL = `https://restcountries.com/v3.1/region/${region}`;
        if (name) baseURL = `https://restcountries.com/v3.1/name/${name}`;

        setIsLoading(true);

        try {
            const { data } = await axios.get(baseURL);
            setCountries(data);
        } catch (error) {
            console.log(error);
        }

        setIsLoading(false);
    };

    return (
        <main className={styles.main}>
            <Container>
                <div className={styles.controls}>
                    <SearchBox name={name} setName={setName} />
                    <SelectFilter region={region} setRegion={setRegion} />
                </div>
                <div className={styles.flagsGrid}>
                    {countries &&
                        countries.map(
                            (
                                { flags, name, population, region, capital },
                                i
                            ) => {
                                return (
                                    <LazyLoad
                                        className={styles.lazyload}
                                        key={i}
                                    >
                                        <Link to={`/${name.common}`}>
                                            <FlagItem
                                                flag={flags.png}
                                                name={name.common}
                                                population={population}
                                                region={region}
                                                capital={capital}
                                            />
                                        </Link>
                                    </LazyLoad>
                                );
                            }
                        )}
                    {isLoading && <Loader />}
                </div>
            </Container>
        </main>
    );
};

export default Home;
