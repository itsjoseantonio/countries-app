// Styles //
import styles from '../Styles/components/FlagItem.module.scss';

const FlagItem = ({ flag, name, population, region, capital }) => {
    return (
        <a href="/" className={styles.flagItem}>
            <div className={styles.flagItem__image}>
                <img src={flag} alt={name} />
            </div>
            <div className={styles.flagItem__text}>
                <h2>{name}</h2>
                <ul>
                    <li>
                        <span>Population:</span> {population}
                    </li>
                    <li>
                        <span>Region:</span> {region}
                    </li>
                    <li>
                        <span>Capital:</span> {capital}
                    </li>
                </ul>
            </div>
        </a>
    );
};

export default FlagItem;
