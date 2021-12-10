import React from "react";
import "./Editor.css";

function editor() {
  return (
    <>
      <div className="bg-warning">This is Editor</div>

      <div className="container">
        <div className="row">
          <div className="col-md-6 editor-window">
            <div className="left-div">
              <div class="form-group">
                <label htmlFor="exampleFormControlTextarea1">
                  Example textarea
                </label>
                <textarea
                  className="form-control "
                  id="input-textarea"
                  rows="3"
                ></textarea>
              </div>
            </div>
          </div>
          <div className="col-md-6 bg-success output-window">
            <div className="right-div"> <div class="form-group">
    <label htmlFor="exampleFormControlTextarea1">Example textarea</label>
    <textarea className="form-control " id="output-textarea" rows="3"></textarea>
   
  </div></div>
          </div>
        </div>
      </div>
    </>
  );
}

export default editor;
