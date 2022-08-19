import Alphabets from "../assets/alphabets";
export const treatName = (name) => {
  let tmpName = [];
  for (let eachStringPosition in name.toString().split("")) {
    let eachString = name[eachStringPosition];
    if (Alphabets.includes(eachString.toLowerCase())) {
      tmpName.push(eachString.toUpperCase());
    }
  }
  return tmpName;
};
