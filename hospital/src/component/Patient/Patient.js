import React, { useState } from "react";
import { CgProfile } from "react-icons/cg";
import { FaRegEdit } from "react-icons/fa";
import { IoMdClose } from "react-icons/io";
import "./patient.css";
const Patient = () => {
  const [close, setClose] = useState(false);
  const view = () => {
    setClose(true);
  };
  const [editMode, setEditMode] = useState(false);
  const [patientData, setPatientData] = useState({
    name: "",
    age: "",
    phoneNumber: "",
    email: "",
    guardian: {
      name: "",
      phoneNumber: "",
    },
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setPatientData({
      ...patientData,
      [name]: value,
    });
  };

  const handleGuardianChange = (e) => {
    const { name, value } = e.target;
    setPatientData({
      ...patientData,
      guardian: {
        ...patientData.guardian,
        [name]: value,
      },
    });
  };

  const handleEdit = () => {
    setEditMode(true);
  };

  const handleSave = () => {
    console.log(patientData);
    setEditMode(false);
    setPatientData({
      name: "",
      age: "",
      phoneNumber: "",
      email: "",
      guardian: {
        name: "",
        phoneNumber: "",
      },
    });
  };
  return (
    <>
      {close ? (
        <div className="pcontainer">
        <div className="patprofile">
          {/* <button className="close-btn" onClick={() => setClose(false)}>Close</button> */}
          <IoMdClose className="close-btn" onClick={() => setClose(false)}/> 
          <label>
            Patient Name:
            {editMode ? (
              <input type="text" name="name" value={patientData.name} onChange={handleChange}
              />
            ) : (
              <span>{patientData.name}</span>
            )}
          </label>
          <label>
            Age:
            {editMode ? (
              <input type="number" name="age" value={patientData.age} onChange={handleChange}
              />
            ) : (
              <span>{patientData.age}</span>
            )}
          </label>
          <label>
            Phone Number:
            {editMode ? (
              <input type="tel" name="phoneNumber" value={patientData.phoneNumber} onChange={handleChange}
              />
            ) : (
              <span>{patientData.phoneNumber}</span>
            )}
          </label>
          <label>
            Email:
            {editMode ? (
              <input type="email" name="email" value={patientData.email} onChange={handleChange}
              />
            ) : (
              <span>{patientData.email}</span>
            )}
          </label>
          <label>
            Guardian Name:
            {editMode ? (
              <input type="text" name="name" value={patientData.guardian.name} onChange={handleGuardianChange}
              />
            ) : (
              <span>{patientData.guardian.name}</span>
            )}
          </label>
          <label>
            Guardian Phone Number:
            {editMode ? (
              <input type="tel" name="phoneNumber" value={patientData.guardian.phoneNumber} onChange={handleGuardianChange}
              />
            ) : (
              <span>{patientData.guardian.phoneNumber}</span>
            )}
          </label>
          {editMode ? (
            <button onClick={handleSave} className="sbtn">Save</button>
          ) : (
            <FaRegEdit onClick={handleEdit} className="editbtn"/>
          )}
        </div>
        </div>
      ) : null}
      <div className="p_profile">
        <p>
          <CgProfile />
        </p>
        <button onClick={() => view()} >PROFILE</button>
      </div>

      <div className="p_appointment"></div>
    </>
  );
};

export default Patient;