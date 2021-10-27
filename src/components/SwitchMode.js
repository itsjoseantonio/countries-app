import { useState, useEffect } from 'react';

// Components //
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMoon, faSun } from '@fortawesome/free-solid-svg-icons';

// Styles //
import styles from '../Styles/components/SwitchMode.module.scss';

const SwitchMode = () => {
    const [darkMode, setDarkMode] = useState(
        localStorage.getItem('theme') === 'dark' ? true : false
    );

    useEffect(() => {
        if (localStorage.getItem('theme') === null) {
            document
                .getElementsByTagName('HTML')[0]
                .setAttribute('data-theme', 'light');
            localStorage.setItem('theme', 'light');
        }

        document
            .getElementsByTagName('HTML')[0]
            .setAttribute('data-theme', localStorage.getItem('theme'));
    }, []);

    const toggleTheme = () => {
        if (darkMode === false) {
            localStorage.setItem('theme', 'dark');
            document
                .getElementsByTagName('HTML')[0]
                .setAttribute('data-theme', localStorage.getItem('theme'));
            setDarkMode(true);
        } else {
            localStorage.setItem('theme', 'light');
            document
                .getElementsByTagName('HTML')[0]
                .setAttribute('data-theme', localStorage.getItem('theme'));
            setDarkMode(false);
        }
    };

    return (
        <span className={styles.switch} onClick={toggleTheme}>
            {!darkMode ? (
                <FontAwesomeIcon icon={faMoon} />
            ) : (
                <FontAwesomeIcon icon={faSun} />
            )}
            {!darkMode ? 'Dark' : 'Light'} Mode
        </span>
    );
};

export default SwitchMode;
