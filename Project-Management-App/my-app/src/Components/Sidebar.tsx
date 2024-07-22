import './Sidebar.css'

type sideBarProps= {
    onAddProject : any,
    listData?: any,
    handlePreview: any


}


const Sidebar = ({onAddProject, handlePreview, listData=[]}: sideBarProps)=> {

  
    
  
  return (
    <div id='side-bar' className='side-bar'>
        <h1>Your Projects</h1>
        <button onClick={onAddProject}>+ Add Project</button>
        <ul className='list-items'>

            {listData.length > 0 && listData.map((data:any, index:any)=> 
            <li key={index} className='list-item' onClick={(e)=>handlePreview(data)}>
                {data.title}
            </li>)}

          

            
          
        </ul>
    </div>
  )
}

export default Sidebar