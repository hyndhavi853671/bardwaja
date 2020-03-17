import React from "react";
import Updateemp from "./updateemp";

{
  /*import React from "react";
import Updateemp from "./updateemp";
import Input from "./input";
const Employe = props => {
  const { deleteEmp, updateEmp, getEmp, employee } = props;
  return (
    <div>
      <table className="table">
        <thead style={{ backgroundColor: "grey" }}>
          <th style={{ color: "blue" }}>empId</th>
          <th style={{ color: "blue" }}>empName</th>
          <th style={{ color: "blue" }}>empEmail</th>
          <th style={{ color: "blue" }}>empDept</th>
          <th style={{ color: "blue" }}>Action</th>
        </thead>
        <tbody>
          {props.employee.map(employee => (
            <tr key={employee.empName}>
              <td>{employee.empId}</td>
              <td>{employee.empName}</td>
              <td>{employee.empEmail}</td>
              <td>{employee.empDept}</td>
              <td>
                <button
                  onClick={() => props.getEmp(employee.empId)}
                  className="btn btn-secondary"
                >
                  Update
                </button>
                <button onClick={() => props.deleteEmp(employee.empId)}>
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Employe;*/
}

const Emptable = props => {
  // const emp = props.empd;
  //const deleteEmp = props.deleteEmp;
  return (
    <div>
      <div
        className="modal fade"
        id="update"
        tabindex="-1"
        role="dialog"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5
                className="modal-title bg-dark text-light"
                id="exampleModalLabel"
              >
                Updating
              </h5>
              <button
                type="button"
                className="close"
                data-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div className="modal-body">
              <Updateemp
                // employees={props.employees}
                updateEmp={props.updateEmp}
                employee={props.employee}
                handleInputField={props.handleInputField}
              />
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-dismiss="modal"
              >
                Close
              </button>
              {/*  <button type="button" class="btn btn-primary">
                Save changes
              </button> */}
            </div>
          </div>
        </div>
      </div>
      <table className="table mt-5 bg-light text-primary">
        <thead>
          <tr>
            <th>Emp Id</th>
            <th>Emp Name</th>
            <th>Emp Email</th>
            <th>Emp Dept</th>
          </tr>
        </thead>
        <tbody className="text-black">
          {props.employee.map(e1 => (
            <tr>
              <td>{e1.empId}</td>
              <td>{e1.empName}</td>
              <td>{e1.empEmail}</td>
              <td>{e1.empDept}</td>
              <td>
                <button
                  className=" mr-1 btn btn-info"
                  data-toggle="modal"
                  data-target="#update"
                  onClick={() => props.getEmp(e1.empId)}
                >
                  Update
                </button>

                <button
                  onClick={() => props.deleteEmp(e1.empId)}
                  className=" ml-1 btn btn-outline-danger"
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Emptable;
