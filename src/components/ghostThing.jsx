import React, {useState, useEffect} from 'react';
import {library} from "@fortawesome/fontawesome-svg-core";
import {
    faBraille,
    faSignature,
    faChartLine,
    faDotCircle,
    faFingerprint,
    faTemperatureLow,
    faMobile
} from "@fortawesome/free-solid-svg-icons";
import MyAwesomeButton from "./myAwesomeButton";
import {Proof, allGhosts, getEvidenceArray, twoEvidence, threeEvidence} from './util';
import {ButtonGroup, Col, Container, ListGroup, Row} from "react-bootstrap";
import "../styles/ghostThing.css"
import "bootstrap/dist/css/bootstrap.min.css"


const GhostThing = () => {
    const [evidenceArray, setEvidenceArray] = useState([]);
    const [possibleGhosties, setPossibleGhosties] = useState(allGhosts);

    library.add(faFingerprint, faTemperatureLow, faMobile, faSignature, faBraille, faDotCircle, faChartLine);

    useEffect(() => {
        switch (evidenceArray.length) {
            default:
                setPossibleGhosties(["NO POSSIBLE GHOST", "SELECT NO MORE THAN THREE EVIDENCE"]);
                break;
            case 0:
                setPossibleGhosties(allGhosts);
                break;
            case 1:
                setPossibleGhosties(getEvidenceArray(evidenceArray[0]));
                break;
            case 2:
                setPossibleGhosties(
                    twoEvidence(getEvidenceArray(evidenceArray[0]), getEvidenceArray(evidenceArray[1]))
                );
                break;
            case 3:
                setPossibleGhosties(
                    threeEvidence(
                        getEvidenceArray(evidenceArray[0]),
                        getEvidenceArray(evidenceArray[1]),
                        getEvidenceArray(evidenceArray[2])
                    )
                );
                break;
        }
    }, [evidenceArray]);

    const modifyArray = evidence => {
        if (evidenceArray.includes(evidence)) {
            setEvidenceArray(evidenceArray.filter(element => element !== evidence));
        } else {
            setEvidenceArray(evidenceArray.concat(evidence));
        }
    };

    return (
        <Container>
            <Row>
                <Col className={"col-8 mx-auto"}>
                    <h1>SoBe's Ghost Finder</h1>
                    <h2>Discovered Evidence</h2>
                </Col>
            </Row>
            <Row>
                <Col className={"col-8 mx-auto"}>
                    <ButtonGroup>
                        {Proof.map(evidence => (
                            <MyAwesomeButton handleClick={modifyArray} evidence={evidence} key={evidence.NAME}/>
                        ))}
                    </ButtonGroup>
                </Col>
            </Row>
            <Row>
                <Col className={"col-8 mx-auto"}>
                    <h2>Possible Ghosts</h2>
                    <ListGroup className={"d-flex flex-row flex-wrap"}>
                    {possibleGhosties.map(ghosty => (
                        <ListGroup.Item className={"w-50"}>{ghosty}</ListGroup.Item>
                    ))}
                    </ListGroup>
                </Col>
            </Row>
        </Container>
    );
}

export default GhostThing;
