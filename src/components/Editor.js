import React, {useEffect, useState} from 'react'
import ReactMarkdown from 'react-markdown';
import "./Editor.css";

function Editor() {

    const [rawCode, setRawCode] = useState("");

    useEffect(() => {
        
    });

  return (
    <>
        <div className="main-heading">
        
        <h2><img src="https://img.icons8.com/fluency/69/000000/markdown.png"/> React Markdown Editor</h2>
        </div>
      <div className="container-fluid body">
        <div className="row">
          <div className="col-md-6 editor-window">
            <div className="left-div">
              <div class="form-group">
                <label htmlFor="exampleFormControlTextarea1">
                </label>
                <textarea
                  className="form-control"
                  id="input-textarea"
                  rows="3"
                  value={rawCode}
                  onChange={(e) => setRawCode(e.target.value)}
                ></textarea>
              </div>
            </div>
          </div>
          <div className="col-md-6 output-window">
            <div className="right-div"> <div class="form-group">
    <label htmlFor="exampleFormControlTextarea1"></label>
   
    <div className="form-control" id="output-textarea" rows="3">
        <ReactMarkdown children={rawCode} />
    </div>
   
  </div></div>
          </div>
        </div>
        <div className="page-footer font-small blue">
        
        <div className="footer-copyright text-center py-3">
            Made with <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24"><path d="M12 4.435c-1.989-5.399-12-4.597-12 3.568 0 4.068 3.06 9.481 12 14.997 8.94-5.516 12-10.929 12-14.997 0-8.118-10-8.999-12-3.568z"/></svg> by <a href="https://github.com/yashnaravade" style={{}} className='footer-anchor'> Yash Naravade</a>
        </div>
      
    </div>

      </div>
    </>
  );
}

export default Editor;
