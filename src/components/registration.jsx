import React from "react";
//import EmpForm from "./empform";
import Input from "./input";
//import Button from "./button";
{
  /*const Registration = ({
  empId,
  empName,
  empEmail,
  empDept,
  handleInputField,
  addEmp
}) => {
  return (
    <div>
      <form
        onSubmit={addEmp}
        className="wx-5 text-center border border-rounded mt-5 p-3"
        // onSubmit={addEmp}
      >
        <table className="table">
          <th> Adding Employees</th>
          <tbody>
            <tr>
              <div className="form-group">
                <Input
                  type="text"
                  value={empId}
                  inputName="empId"
                  handleInputField={handleInputField}
                  label="Id"
                />
              </div>
              <div className="form-group">
                <Input
                  type="text"
                  value={empName}
                  inputName="empName"
                  handleInputField={handleInputField}
                  label="EmpName"
                />
              </div>
              <div className="form-group">
                <Input
                  type="text"
                  value={empEmail}
                  inputName="empEmail"
                  handleInputField={handleInputField}
                  label="EmpEmail"
                />
              </div>
              <div className="form-group">
                <Input
                  type="text"
                  value={empDept}
                  inputName="empDept"
                  handleInputField={handleInputField}
                  label="EmpDept"
                />
              </div>
              <input type="submit" placeholder="" />
            </tr>
          </tbody>
        </table>
      </form>
    </div>
  );
};

export default Registration;*/
}
const Addemployee = ({
  empId,
  empName,
  empEmail,
  empDept,
  addEmp,
  handleInputField
}) => {
  return (
    <div>
      <form onSubmit={addEmp} className="w-50 mt-5  mx-auto">
        <p className="h3 bg-dark text-white text-center p-3">Add Employee</p>
        <div className="form-group text-warning">
          <Input
            inputName="empId"
            value={empId}
            type="number"
            handleInputField={handleInputField}
            label="Emp ID"
          />
        </div>
        <div className="form-group text-warning">
          <Input
            inputName="empName"
            value={empName}
            type="text"
            handleInputField={handleInputField}
            label="Emp Name"
          />
        </div>
        <div className="form-group text-warning">
          <Input
            inputName="empEmail"
            value={empEmail}
            type="email"
            handleInputField={handleInputField}
            label="Emp Email"
          />
        </div>
        <div className="form-group text-warning">
          <Input
            inputName="empDept"
            value={empDept}
            type="text"
            handleInputField={handleInputField}
            label="Emp Dept"
          />
        </div>
        <button
          className="btn btn-block btn-outline-light
       text-black"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default Addemployee;
