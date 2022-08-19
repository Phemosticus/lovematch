export const getResult = (namesCollection) => {
  let result = [];
  let allNames = [];
  let filteredNames = [];
  for (let i = 0; i < namesCollection.length; i++) {
    for (let j = 0; j < namesCollection[i].length; j++) {
      if (namesCollection[i][j][0] !== "No Luck Here...") {
        allNames.push(namesCollection[i][j][0]);
      }
    }
  }

  for (let eachNamePos in allNames) {
    let eachName = allNames[eachNamePos];
    if (!filteredNames.includes(eachName)) {
      //Get how many occurence
      let num = allNames.filter((value) => eachName === value).length;
      filteredNames.push(eachName);
      result.push([eachName, eachName.charAt(0), num]);
    }
  }
  result = result.sort((a, b) => b[2] - a[2]);
  return result;
};
