// Components //
import SearchBox from '../components/SearchBox';
import Container from '../components/Container';

// Styles //
import styles from '../Styles/views/Home.module.scss';

const Home = () => {
    return (
        <main>
            <Container>
                <div className={styles.controls}>
                    <SearchBox />
                </div>
            </Container>
        </main>
    );
};

export default Home;
