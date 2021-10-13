// Icons //
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';

// Styles //
import styles from '../Styles/components/SelectFilter.module.scss';

const SelectFilter = () => {
    return (
        <div className={styles.seletFilter}>
            <select>
                <option value="">Fylter by Region</option>
                <option value="">Africa</option>
                <option value="">Fylter by Region</option>
            </select>
            <FontAwesomeIcon icon={faChevronDown} />
        </div>
    );
};

export default SelectFilter;
