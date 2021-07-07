import React from "react";
import URL, { parse, Url } from "url-parse";
import { isURL } from "validator";

export function getSubRedditUrl(input, sort) {
  input = (input + "").trim();

  var newUrl;
  if (isURL(input)) {
    if (input.startsWith("http://") || input.startsWith("https://")) newUrl = input + "/" + sort;
    else {
      newUrl = "https://";
      if (!input.startsWith("www.")) newUrl += "www.";
      newUrl += input;
      if (newUrl.endsWith("/")) newUrl += sort;
      else newUrl += "/" + sort;
    }
  } else {
    
    newUrl = URL("https://www.reddit.com", "www.reddit.com");

    
    if (input !== "") newUrl.pathname = "/r/" + input + "/";
    newUrl += sort;
  }

  
  return newUrl.toString();
}


export function stringToArray(inputString) {
  return inputString.split(/[s\s,]+/);
}
