import React, { useRef, useState } from "react";
import './NewProject.css'


type sectionProps = {
  onCancel: any
  getData: any
}

const NewProject = ({onCancel, getData}: sectionProps) => {
  const title = useRef<HTMLInputElement>(null); // Define the type for useRef
  const description = useRef<HTMLTextAreaElement>(null); // Define the type for useRef
  const enteredDate = useRef<HTMLInputElement>(null); // Define the type for useR

 
  const [projectData, setProjectData] = useState<any[]>([]);

  

  const handleSave= ()=> {
    setProjectData(
     [...projectData, {
      title: title.current?.value,
      description: description.current?.value,
      enteredDate:  enteredDate.current?.value
     }]
    )

    if (title.current) {
      title.current.value = '';
    }
    if (description.current) {
      description.current.value = '';
    }
    if (enteredDate.current) {
      enteredDate.current.value = '';
    }
  }


 


  getData(projectData)


  return (
    <div id="new-project">
      <div className="input-wrapper">
        <p>
          <label htmlFor="title" >TITLE</label>
          <input type="text" id="title" ref={title} required/>
          
        </p>
        <p>
          <label htmlFor="description">DESCRIPTION</label>
          <textarea name="description" id="description" ref={description} required></textarea>
        </p>
        <p>
          <label htmlFor="date">DUE DATE</label>
          <input type="date" name="" id="" ref={enteredDate} required/>
        </p>
      </div>

      <div className="project-buttons">
        <button className="project-cancel-btn" onClick={onCancel}>Cancel</button>
        <button className="project-save-button" onClick={handleSave}>Save</button>
      </div>
    </div>
  );
};

export default NewProject;
