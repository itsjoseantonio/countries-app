// Components //
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMoon } from '@fortawesome/free-solid-svg-icons';

// Styles //
import styles from '../Styles/components/SwitchMode.module.scss';

const SwitchMode = () => {
    return (
        <span className={styles.switch}>
            <FontAwesomeIcon icon={faMoon} />
            Dark Mode
        </span>
    );
};

export default SwitchMode;
