import { singular } from "pluralize";

export function singularize(termsMap) {
  var toAdd = [];
  var toRemove = [];

  //For all terms, check if it has a singular form.
  termsMap.forEach((value, key) => {
    var singularTerm = singular(key);
    if (singularTerm !== key) {
      //If a singular form was found,
      // mark the plural to be removed
      toRemove.push(key);
      //If the singular alraedy exists in the map, combine the counts
      toAdd.push(key);
    }
  });

  //For each singular being added
  toAdd.forEach((value) => {
    var singularTerm = singular(value);
    var current = 0;
    //Check if there is a value for the singular form already.
    if (termsMap.has(singularTerm)) {
      current = termsMap.get(singularTerm);
    }
    termsMap.set(singularTerm, current + termsMap.get(value));
  });

  //For each plural being removed
  toRemove.forEach((value) => {
    termsMap.delete(value);
  });
}
