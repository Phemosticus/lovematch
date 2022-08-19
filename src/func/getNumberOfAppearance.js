export const getNumberOfApperance = (theName, namesCollection) => {
  let appearance = 0;
  if (theName === "No Luck Here...") {
    return "";
  }
  for (var i = 0; i < namesCollection.length; i++) {
    let diffNames = namesCollection[i];
    for (let eachNamePos in diffNames) {
      if (diffNames[eachNamePos][0] === theName) {
        appearance = appearance + 1;
      }
    }
  }
  return appearance;
};
