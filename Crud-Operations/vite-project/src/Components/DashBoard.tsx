import { useRef, useState } from "react";
import React from "react";
import DashBoardHeader from "./DashBoardHeader";
import DashBoardTable from "./DashBoardTable";
import Modal from "./Modal";


const DashBoard = () => {

  const [studentArray, setStudentArray] = useState([]);
  const [openFormModal, setopenFormModal] = useState(false);

  const name:any = useRef();
  const number:any = useRef();
  const email:any = useRef();
  const date:any = useRef();

  const addDataToTable=()=> {
    const student_details = {
      name: name.current.value,
      number: number.current.value,
      email: email.current.value,
      date: date.current.value,
      id: Math.random(),
    }

    setStudentArray((prevDetails):any => {
      return [...prevDetails, student_details]
    }
    )

    setopenFormModal(false);
  }
  return (
    <>
       <div className="dashboard-wrapper w-screen h-screen bg-white">
      <DashBoardHeader studentData={studentArray}/>

      {openFormModal &&  <p>
            <label htmlFor="">Name of Student</label>
            <input type="text" ref={name}/>
            <label htmlFor="">Phone Number</label>
            <input type="number" ref={number}/>
            <label htmlFor="">Email</label>
            <input type="Email" ref={email}/>
            <label htmlFor="">Date of Admission</label>
            <input type="date" ref={date}/>

            <button onClick={addDataToTable}>Add details</button>
        </p>}

      
     {!openFormModal && <main>
        <div className="dashboard-title flex justify-between items-center px-6 py-2">
          <p className="text-2xl">Students List</p>
          <button className="bg-[#FEAF00] px-3 py-2 rounded-lg text-white" onClick={()=> setopenFormModal(true)}>ADD NEW STUDENT</button>
        </div>
        <hr className="p-2"/>
        <DashBoardTable detailsOfStudents={studentArray}/>
      </main>}


    </div>
    </>
 
  );
};

export default DashBoard;
