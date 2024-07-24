import React from "react";
import { useRef, useState } from "react";

const DashBoardHeader = ({studentData}:any) => {

    const searchVal:any = useRef();

    const [filteredData, setFilteredData] = useState(studentData);

    const inputChangeHandler= () => {
        setFilteredData(studentData.filter(student=> student.name === searchVal.current.value));
        console.log(filteredData);
    }


  return (
    <header className="dashboard-header w-full h-14 flex justify-between items-center shadow-md p-2 text-[#f39e15] text-lg font-medium">
      <h1>CRUD OPERATIONS</h1>
      <input
        ref={searchVal}
        type="Search"
        placeholder="Search any students"
        className="border-2 px-2 text-md outline-none rounded-sm"
        onChange={inputChangeHandler}
      />
    </header>
  );
};

export default DashBoardHeader;
