import React from "react";

const Student = ({ index, studentObj }) => {
  console.log(studentObj);
  const { name, country } = studentObj;
  return (<>
      <li
        className="list-group-item d-flex align-items-center border-0 mb-2 rounded"
        style={{ backgroundColor: "#f4f6f7" }}
      >
        {name}    ||    {country}
      </li>
      
      </>
  );
};

export default Student;
