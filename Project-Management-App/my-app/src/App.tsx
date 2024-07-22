import React, { useState, ReactEventHandler } from 'react';
import logo from './logo.svg';
import './App.css';
import Sidebar from './Components/Sidebar';
import NewProject from './Components/NewProject';
import NoProjects from './Components/NoProjects';
import Preview from './Components/Preview';

function App() {
  const [createNewProject, setCreateNewProject] = useState(true);
  const [listData, setlistData] = useState();
  const [previewData, setPreviewData] = useState();
  const [openPreview, setOpenPreview] = useState(false);


  
  const handleNewProject: ReactEventHandler = () => {
    setCreateNewProject(false);
    setOpenPreview(false);
  }
  const handleCancel = ()=> {
    setCreateNewProject(true);
  }

  function getProjectData(projectData:any) {
    setlistData(projectData);
    console.log(projectData)
  }

  function handlePreview(data: any){
    setOpenPreview(true);
    setPreviewData(data)

  }

  console.log(listData)

  return (
    <div className="App">
      <main>
      <Sidebar onAddProject={handleNewProject} listData={listData} handlePreview = {handlePreview} />
      {!createNewProject && !openPreview && <NewProject onCancel={handleCancel} getData={getProjectData}/>}
      {createNewProject && !openPreview && <NoProjects onClickNewProject={handleNewProject}/>}
      {openPreview && <Preview previewData={previewData}/> }
    
      </main>
      
     
    </div>
  );
}

export default App;
