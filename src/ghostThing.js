import React from "react";
import ReactDOM from "react-dom";
import '/ghostThing.css';

class GhostButton extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isToggledOn: false
        }
    }

    renderGhostButton(evidence) {
        return (
            <button
                className={"ghostButton"}
                value={evidence}
                onClick={this.props.onClick}>
                {evidence}
            </button>
        )
    }

    render(){
        return (
            <div>
                <ol>
                    <li>{this.renderGhostButton(Proof.GHOST_ORB)}</li>
                    <li>{this.renderGhostButton(Proof.GHOST_WRITING)}</li>
                    <li>{this.renderGhostButton(Proof.SPIRIT_BOX)}</li>
                    <li>{this.renderGhostButton(Proof.TEMPERATURE)}</li>
                    <li>{this.renderGhostButton(Proof.FINGERPRINTS)}</li>
                    <li>{this.renderGhostButton(Proof.EMF_LEVEL)}</li>
                    <li>{this.renderGhostButton(Proof.DOTS_PROJECTOR)}</li>
                </ol>
            </div>
        )
    }

    onClick() {
        this.setState({
            isToggledOn: !this.state.isToggledOn
        });
    }
}
class GhostThing extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            firstEvidence: null,
            secondEvidence: null,
            thirdEvidence: null,
            possibleGhosts: [
                "Banshee", "Demon",
                "Goryo", "Hantu",
                "Jinn", "Mare",
                "Myling", "Oni",
                "Phantom", "Poltergeist",
                "Revenant", "Shade",
                "Spirit", "Wraith",
                "Yokai", "Yurei"]
        }
    }
}

function twoEvidence(evidenceOne, evidenceTwo) {
    return evidenceOne.filter(value =>evidenceTwo.includes(value));
}
function threeEvidence(evidenceOne, evidenceTwo, evidenceThree) {
    return twoEvidence(twoEvidence(evidenceOne, evidenceTwo), evidenceThree);
}

const Proof = {
    DOTS_PROJECTOR: "D.O.T.S. Projector",
    GHOST_WRITING: "Ghost Writing",
    EMF_LEVEL: "EMF Level 5",
    GHOST_ORB: "Ghost Orb",
    FINGERPRINTS: "Fingerprints",
    TEMPERATURE: "Freezing Temperatures",
    SPIRIT_BOX: "Spirit Box"
}

function getEvidenceArray(evidence) {
    switch(evidence) {
        case Proof.DOTS_PROJECTOR:
            return ["Banshee", "Goryo", "Oni", "Phantom", "Wraith", "Yokai", "Yurei"];
        case Proof.GHOST_WRITING:
            return ["Demon", "Mare", "Myling", "Poltergeist", "Revenant", "Shade", "Spirit"];
        case Proof.EMF_LEVEL:
            return ["Goryo", "Jinn", "Myling", "Oni", "Shade", "Spirit", "Wraith"];
        case Proof.GHOST_ORB:
            return ["Banshee", "Hantu", "Mare", "Revenant", "Yokai", "Yurei"];
        case Proof.FINGERPRINTS:
            return ["Banshee", "Demon", "Goryo", "Hantu", "Jinn", "Myling", "Phantom", "Poltergeist"];
        case Proof.TEMPERATURE:
            return ["Demon", "Hantu", "Jinn", "Oni", "Revenant", "Shade", "Yurei"];
        case Proof.SPIRIT_BOX:
            return ["Mare", "Phantom", "Poltergeist", "Spirit", "Wraith", "Yokai"];
        default:
            return [
                "Banshee", "Demon",
                "Goryo", "Hantu",
                "Jinn", "Mare",
                "Myling", "Oni",
                "Phantom", "Poltergeist",
                "Revenant", "Shade",
                "Spirit", "Wraith",
                "Yokai", "Yurei"];
    }
}