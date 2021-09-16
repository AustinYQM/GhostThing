import React, {useState} from 'react';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
//import {Button} from "@material-ui/core";
import {Button} from "react-bootstrap";
import PropTypes from "prop-types";
import "../styles/awesomebutton.css"
import "bootstrap/dist/css/bootstrap.min.css"

function MyAwesomeButton ({handleClick, evidence}) {
    MyAwesomeButton.propTypes = {
        evidence: PropTypes.object,
        handleClick: PropTypes.func
    };

    const [isToggledOn, setIsToggledOn] = useState(false);


    return (
            <Button
                variant={`${!isToggledOn ? 'secondary' : 'primary'}`}
                onClick={() => {
                    setIsToggledOn(!isToggledOn);
                    handleClick(evidence.NAME);
                }}
            >
                <div className="icon"> <FontAwesomeIcon icon={evidence.ICON} size="lg" fixedWidth /> </div>    {evidence.NAME}
            </Button>
    );
}


export default MyAwesomeButton