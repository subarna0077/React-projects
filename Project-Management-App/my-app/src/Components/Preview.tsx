import React from "react";
import "./Preview.css";

type previewProps = {
  previewData: any;
};

const Preview = ({ previewData }: previewProps) => {
  const formatObj = new Intl.DateTimeFormat("en-US");

  return (
    <section id="preview">
        
          {/* <div className="preview-header">
            <h1>Suman</h1>
            <button className="preview-delete">Delete</button>
          </div>
          <p>2929</p>
          <p className="preview-description">23238328</p>
          <br />
          <div className="tasks"></div>
        </> */}

      
        <>
          <div className="preview-header">
            <h1>{previewData.title}</h1>
            <button className="preview-delete">Delete</button>
          </div>
          <p>{previewData.enteredDate}</p>
          <p className="preview-description">{previewData.description}</p>
          <br />
          <div className="tasks"></div>
        </>
    
    </section>
  );
};

export default Preview;
