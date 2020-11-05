import React, { useRef, useState } from "react";

const Translation = () => {
  const [outputText, setOutputText] = useState("");
  const textArea = useRef("");
  const display = () => {
    setOutputText(textArea.current.innerHTML);
    textArea.current.innerHTML = "";
  };
  return (
    <React.Fragment>
      <div className="main-container">
        <div className="title">
          This is a demo tool under construction. We are working on it.
        </div>
        <div className="result-container">
          <div className="input-container">
            <span
              className="input-value"
              contentEditable
              ref={textArea}
              data-placeholder="Please type anything inside here."
            />
            <button className="input-submit" type="submit" onClick={display}>
              Click Me
            </button>
          </div>
          <span className="separter" />
          <div className="output-container">
            <span className="output">{outputText}</span>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Translation;
