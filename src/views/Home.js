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
const baseURL = 'https://restcountries.com/v2/all';

const Home = () => {
    const [countries, setCountries] = useState(null);

    useEffect(() => {
        getAllContries();
    }, []);

    const getAllContries = async () => {
        try {
            const { data } = await axios.get(baseURL);
            setCountries(data);
        } catch (error) {}
    };

    return (
        <main className={styles.main}>
            <Container>
                <div className={styles.controls}>
                    <SearchBox />
                    <SelectFilter />
                </div>
                <div className={styles.flagsGrid}>
                    {countries &&
                        countries.map(
                            ({ flags, name, population, region, capital }) => {
                                return (
                                    <FlagItem
                                        flag={flags.png}
                                        name={name}
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
