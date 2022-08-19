import BoysNames from "../assets/boys";
import GirlsNames from "../assets/girls";
export const getNames = (treatedName, gender, setPopNames) => {
  const names = gender === "female" ? BoysNames : GirlsNames;
  const returnedNames = [];
  for (let eachStringPos in treatedName) {
    let eachString = treatedName[eachStringPos];
    let filteredNames = [];
    filteredNames = names.filter((name) => name.charAt(0) === eachString);
    let randomInt, selectedName;
    if (filteredNames.length > 0) {
      randomInt = Math.floor(Math.random() * filteredNames.length);
      selectedName = [
        filteredNames[randomInt],
        filteredNames[randomInt].charAt(0),
      ];
    } else {
      selectedName = ["No Luck Here...", eachString];
    }
    returnedNames.push(selectedName);
  }
  setPopNames(returnedNames);
  return returnedNames;
};
