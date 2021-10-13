// Components //
import SearchBox from '../components/SearchBox';
import Container from '../components/Container';
import SelectFilter from '../components/SelectFilter';
import FlagItem from '../components/FlagItem';

// Styles //
import styles from '../Styles/views/Home.module.scss';

const Home = () => {
    return (
        <main className={styles.main}>
            <Container>
                <div className={styles.controls}>
                    <SearchBox />
                    <SelectFilter />
                </div>
                <div className={styles.flagsGrid}>
                    <FlagItem />
                </div>
            </Container>
        </main>
    );
};

export default Home;
