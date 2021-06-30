import React from "react";
import "./css/Form.css";

const Form = ({ handleChange, handleSubmit, userInput }) => {
  return (
    <>
      <div className="container-xxl">
        <form className="form">
          <div class="form-control">
            <br></br>
            <div class="form-section">
              <label class="label-header" htmlFor="commenturl">
                ENTER URL
              </label>
              <br></br>
              <br></br>

              <div>Select to analyze post comments or subreddit subjects:</div>
              <select id="selectURL" name="urlType" onChange={handleChange} value={userInput.urlType}>
                <option value="comment" selected>
                  Post comments
                </option>
                <option value="topic">Subreddit subjects</option>
              </select>
              <br></br>

              <input
                type="text"
                name="url"
                class="form-input"
                id="commenturl"
                placeholder="Paste URL Here"
                value={userInput.url}
                onChange={handleChange}
              />
              <br></br>
            </div>

            <br></br>
            <div class="form-section">
              <label class="label-header" htmlFor="commenturl">
                ENTER KEYWORDS FOR ANALYSIS
              </label>
              <br></br>
              <input
                type="text"
                name="include"
                class="form-input"
                id="keywordInclude"
                placeholder="Enter keyword(s) to include here, separated by a comma"
                value={userInput.include}
                onChange={handleChange}></input>
              <br></br>
              <label class="label-header" htmlFor="commenturl">
                EXCLUDE KEYWORDS FROM ANALYSIS
              </label>
              <br></br>
              <input
                type="text"
                name="exclude"
                class="form-input"
                id="keywordExclude"
                placeholder="Enter keyword(s) to exclude here, separated by a comma"
                value={userInput.exclude}
                onChange={handleChange}></input>
              <br></br>
              <br></br>
              <input
                type="checkbox"
                name="defaultExclude"
                id="commonWordExclude"
                checked={userInput.defaultExclude}
                onChange={handleChange}
              />
              &nbsp;Exclude common English words&nbsp;&nbsp;
              <br></br>
              <div>
                <form>
                  <label class="label-header">SELECT GRAPH TYPE:</label>
                  <br></br>
                  <select id="selectGraph" name="graphType" value={userInput.graphType} onChange={handleChange}>
                    <option value="natural">Bar</option>
                    <option value="network">Network</option>
                    <option value="overtime">Overtime</option>
                  </select>
                </form>
              </div>
              <br></br>
              <br></br>
              <button type="submit" class="button" onClick={handleSubmit}>
                Submit
              </button>
            </div>
          </div>
        </form>
      </div>
    </>
  );
};

export default Form;
