// Styles //
import styles from '../Styles/components/FlagItem.module.scss';

const FlagItem = () => {
    return (
        <div>
            <div>
                <img src="https://flagcdn.com/w320/pe.png" alt="pe" />
            </div>
            <div>
                <h2>Hermany</h2>
                <ul>
                    <li>Population: 00.000.000</li>
                    <li>Region: Europe</li>
                    <li>Capital: Berlin</li>
                </ul>
            </div>
        </div>
    );
};

export default FlagItem;
