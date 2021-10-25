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

    console.log(data);

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
                                <li>Native name: {data[0].name.common}</li>
                                <li>Population: {data[0].population}</li>
                                <li>Region: {data[0].name.common}</li>
                                <li>Sub Region: {data[0].region}</li>
                                <li>Capital: {data[0].capital[0]}</li>
                                <li>Top Level Domain: {data[0].tld[0]}</li>
                                <li>Currencies: {data[0].name.common}</li>
                                <li>Languages: {data[0].name.common}</li>
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
