// Icons //
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

// Styles //
import styles from '../Styles/components/SearchBox.module.scss';

const SearchBox = ({ name, setName }) => {
    const handleName = (value) => {
        setName(value);
        console.log(value);
    };
    return (
        <div className={styles.searchBox}>
            <input
                value={name}
                type="text"
                id="search"
                name="search"
                placeholder="Search for a country..."
                onChange={(e) => handleName(e.target.value)}
            />
            <FontAwesomeIcon icon={faSearch} />
        </div>
    );
};

export default SearchBox;
