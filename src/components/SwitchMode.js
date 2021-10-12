// Components //
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMoon } from '@fortawesome/free-solid-svg-icons';

const SwitchMode = () => {
    return (
        <span>
            <FontAwesomeIcon icon={faMoon} />
            Dark Mode
        </span>
    );
};

export default SwitchMode;
