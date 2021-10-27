import { Link, useParams } from 'react-router-dom';

// Components //
import Container from '../components/Container';
import BackButton from '../components/BackButton';

// Hooks //
import useFetchData from '../hooks/useFetchData';

// Styles //
import styles from '../Styles/views/Single.module.scss';

const Single = () => {
    const { name } = useParams();
    const useCountry = (filter = '') => {
        const data = useFetchData(
            `https://restcountries.com/v3.1/name/${filter}`
        );
        return data;
    };
    const { data } = useCountry(name);

    return (
        <main className={styles.main}>
            <Container>
                <div className={styles.main__back}>
                    <Link to="/">
                        <BackButton />
                    </Link>
                </div>
                {data && (
                    <div className={styles.content}>
                        <div className={styles.content__image}>
                            <img
                                src={data[0].flags.svg}
                                alt={data[0].name.common}
                            />
                        </div>
                        <div className={styles.content__info}>
                            <h2>{data[0].name.common}</h2>
                            <ul>
                                <li>
                                    <span>Native name: </span>
                                    {data[0].name.common}
                                </li>
                                <li>
                                    <span>Population: </span>
                                    {data[0].population}
                                </li>
                                <li>
                                    <span>Region: </span> {data[0].name.common}
                                </li>
                                <li>
                                    <span>Sub Region: </span> {data[0].region}
                                </li>
                                <li>
                                    <span>Capital: </span> {data[0].capital[0]}
                                </li>
                                <li>
                                    <span>Top Level Domain: </span>
                                    {data[0].tld[0]}
                                </li>
                                <li>
                                    <span>Currencies: </span>
                                    {data[0].name.common}
                                </li>
                                <li>
                                    <span>Languages: </span>
                                    {data[0].name.common}
                                </li>
                            </ul>
                            <div className={styles.content__info__borders}>
                                <p>
                                    Borders:{' '}
                                    {data[0].borders.map((item, i) => (
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
