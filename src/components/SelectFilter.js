// Icons //
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';

// Styles //
import styles from '../Styles/components/SelectFilter.module.scss';

const SelectFilter = ({ region, setRegion }) => {
    const handleRegion = (value) => {
        setRegion(value);
        console.log(value);
    };

    return (
        <div className={styles.seletFilter}>
            <select
                value={region}
                onChange={(e) => handleRegion(e.target.value)}
            >
                <option value="">Fylter by Region</option>
                <option value="africa">Africa</option>
                <option value="ame">America</option>
                <option value="asia">Asia</option>
                <option value="europe">Europe</option>
                <option value="oceania">Oceania</option>
            </select>
            <FontAwesomeIcon icon={faChevronDown} />
        </div>
    );
};

export default SelectFilter;
