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
        <main>
            <Container>
                <Link to="/">
                    <BackButton />
                </Link>
                <div>
                    <div>
                        <img src={data && data[0].flags.svg} alt="" />
                    </div>
                    <div>
                        <h2>{data && data[0].name.common}</h2>
                    </div>
                </div>
                <h1>Single</h1>
            </Container>
        </main>
    );
};

export default Single;
