import React, {useState} from 'react';
import PropTypes from 'prop-types';
import '../styles/ghostButton.css';

function GhostButton({handleClick, evidence}) {
    GhostButton.propTypes = {
        evidence: PropTypes.object,
        handleClick: PropTypes.func
    };
    const [isToggledOn, setIsToggledOn] = useState(false);

    return (
        <div>
            <button
                type="button"
                className={`ghostButton ${isToggledOn ? 'active' : ''}`}
                onClick={() => {
                    setIsToggledOn(!isToggledOn);
                    handleClick(evidence.NAME);
                }}
            >
                {evidence.NAME}
            </button>
        </div>
    );
}

export default GhostButton;
