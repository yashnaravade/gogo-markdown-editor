import React from "react";
import "./Editor.css";

function editor() {
  return (
    <>
      <div className="bg-warning">This is Editor</div>

      <div className="container">
        <div className="row">
          <div className="col-md-6 editor-window">
            <div className="left-div">helu</div>
          </div>
          <div className="col-md-6 bg-success output-window">
          <div className="left-div">helu</div>
          </div>
        </div>
      </div>
    </>
  );
}

export default editor;
