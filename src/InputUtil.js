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
    // assume input is just a subreddit, build url
    // *note* 'api.reddit.com' returns json
    newUrl = URL("https://www.reddit.com", "www.reddit.com");

    // check if front page or not
    if (input !== "") newUrl.pathname = "/r/" + input + "/";
    newUrl += sort;
  }

  // url.searchParams.append("limit", "100");
  return newUrl.toString();
}

// Splits string into array, by separating on spaces and commas
export function stringToArray(inputString) {
  return inputString.split(/[s\s,]+/);
}
