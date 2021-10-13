// Icons //
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

// Styles //
import styles from '../Styles/components/SearchBox.module.scss';

const SearchBox = () => {
    return (
        <div className={styles.searchBox}>
            <input
                type="text"
                id="search"
                name="search"
                placeholder="Search for a country..."
            />
            <FontAwesomeIcon icon={faSearch} />
        </div>
    );
};

export default SearchBox;
