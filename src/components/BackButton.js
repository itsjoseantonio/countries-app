// Components //
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLongArrowAltLeft } from '@fortawesome/free-solid-svg-icons';

// Styles //
import styles from '../Styles/components/BackButton.module.scss';

const BackButton = () => {
    return (
        <span className={styles.backButton}>
            <FontAwesomeIcon icon={faLongArrowAltLeft} />
            Back
        </span>
    );
};

export default BackButton;
