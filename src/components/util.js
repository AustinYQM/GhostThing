export const Proof = [
     {NAME: "D.O.T.S. Projector", ICON: "braille"},
     {NAME: "Ghost Writing", ICON: "signature"},
     {NAME: "EMF Level 5", ICON: "chart-line" },
     {NAME: "Ghost Orb", ICON: "dot-circle"},
     {NAME: "Fingerprints", ICON: "fingerprint"},
     {NAME: "Freezing Temperatures", ICON: "temperature-low"},
     {NAME: "Spirit Box", ICON: "mobile"}
  ];
  
  export const allGhosts = [
    "Banshee",
    "Demon",
    "Goryo",
    "Hantu",
    "Jinn",
    "Mare",
    "Myling",
    "Oni",
    "Phantom",
    "Poltergeist",
    "Revenant",
    "Shade",
    "Spirit",
    "Wraith",
    "Yokai",
    "Yurei",
  ];
  
  export function getEvidenceArray(evidence) {
    switch (evidence) {
      case Proof[0].NAME:
        return ["Banshee", "Goryo", "Oni", "Phantom", "Wraith", "Yokai", "Yurei"];
      case Proof[1].NAME:
        return [
          "Demon",
          "Mare",
          "Myling",
          "Poltergeist",
          "Revenant",
          "Shade",
          "Spirit",
        ];
      case Proof[2].NAME:
        return ["Goryo", "Jinn", "Myling", "Oni", "Shade", "Spirit", "Wraith"];
      case Proof[3].NAME:
        return ["Banshee", "Hantu", "Mare", "Revenant", "Yokai", "Yurei"];
      case Proof[4].NAME:
        return [
          "Banshee",
          "Demon",
          "Goryo",
          "Hantu",
          "Jinn",
          "Myling",
          "Phantom",
          "Poltergeist",
        ];
      case Proof[5].NAME:
        return ["Demon", "Hantu", "Jinn", "Oni", "Revenant", "Shade", "Yurei"];
      case Proof[6].NAME:
        return ["Mare", "Phantom", "Poltergeist", "Spirit", "Wraith", "Yokai"];
      default:
        return [
          "Banshee",
          "Demon",
          "Goryo",
          "Hantu",
          "Jinn",
          "Mare",
          "Myling",
          "Oni",
          "Phantom",
          "Poltergeist",
          "Revenant",
          "Shade",
          "Spirit",
          "Wraith",
          "Yokai",
          "Yurei",
        ];
    }
  }
  
  export function twoEvidence(evidenceOne, evidenceTwo) {
    return evidenceOne.filter((value) => evidenceTwo.includes(value));
  }
  export function threeEvidence(evidenceOne, evidenceTwo, evidenceThree) {
    return twoEvidence(twoEvidence(evidenceOne, evidenceTwo), evidenceThree);
  }