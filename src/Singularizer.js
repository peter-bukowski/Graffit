import { singular } from "pluralize";

export function singularize(termsMap) {
  var toAdd = [];
  var toRemove = [];

  
  termsMap.forEach((value, key) => {
    var singularTerm = singular(key);
    if (singularTerm !== key) {
     
      toRemove.push(key);
      
      toAdd.push(key);
    }
  });

  
  toAdd.forEach((value) => {
    var singularTerm = singular(value);
    var current = 0;
    
    if (termsMap.has(singularTerm)) {
      current = termsMap.get(singularTerm);
    }
    termsMap.set(singularTerm, current + termsMap.get(value));
  });

  
  toRemove.forEach((value) => {
    termsMap.delete(value);
  });
}
