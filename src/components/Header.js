// Components //
import Container from './Container';
import SwitchMode from './SwitchMode';

// Styles //
import styles from '../Styles/components/Header.module.scss';

const Header = () => {
    return (
        <header className={styles.header}>
            <Container>
                <div className={styles.header__inner}>
                    <h1>Where in the World?</h1>
                    <SwitchMode />
                </div>
            </Container>
        </header>
    );
};

export default Header;
