import React, { useRef, useState } from 'react'


const Player = () => {
    const name:any = useRef();
    const [activeName, setActiveName] = useState();

    const handleClick = ()=> {
        setActiveName(name.current.value)
    }

  return (
   <section id="player">
    <h1>Welcome,{activeName ? activeName: 'Unknown Stranger'}</h1>
    <p>
        <input type="text"
         ref={name}/>
        <button onClick={handleClick}>Set Name</button>
      </p>

   </section>
  )
}

export default Player