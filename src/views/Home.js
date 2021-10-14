import { useState, useEffect } from 'react';
import axios from 'axios';

// Components //
import SearchBox from '../components/SearchBox';
import Container from '../components/Container';
import SelectFilter from '../components/SelectFilter';
import FlagItem from '../components/FlagItem';

// Styles //
import styles from '../Styles/views/Home.module.scss';

// Api URL //
// const baseURL = 'https://restcountries.com/v3.1/all';
// const baseURL2 = 'https://restcountries.com/v3.1/region/';

const Home = () => {
    const [countries, setCountries] = useState(null);
    const [region, setRegion] = useState('');
    const [name, setName] = useState('');

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
        try {
            const { data } = await axios.get(baseURL);
            setCountries(data);
            console.log(data);
        } catch (error) {}
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
                            ({ flags, name, population, region, capital }) => {
                                return (
                                    <FlagItem
                                        flag={flags.png}
                                        name={name.common}
                                        population={population}
                                        region={region}
                                        capital={capital}
                                    />
                                );
                            }
                        )}
                </div>
            </Container>
        </main>
    );
};

export default Home;
