import React, { Component } from "react";
import Employe from "./employe";
//import EmpFormm from "./empformm";
//import EmpForm from "./empform";
import Registration from "./registration";
class Employee extends Component {
  state = {
    employee: [
      {
        empId: 101,
        empName: "ram",
        empEmail: "ram123@gmail.com",
        empDept: "sales"
      },
      {
        empId: 102,
        empName: "sam",
        empEmail: "sam123@gmail.com",
        empDept: "finance"
      },
      {
        empId: 103,
        empName: "govind",
        empEmail: "govind123@gmail.com",
        empDept: "marketing"
      },
      {
        empId: 104,
        empName: "sita",
        empEmail: "sita123@gmail.com",
        empDept: "accounts"
      }
    ],
    employeee: {
      empId: "",
      empName: "",
      empEmail: "",
      empDept: ""
    },
    errors: {}
  };
  addEmp = event => {
    event.preventDefault();
    console.log(this.state.employeee);
    const employee = [...this.state.employee, this.state.employeee];
    console.log(employee);
    this.setState({ employee: employee });
  };
  getEmp = id => {
    const employeee = this.state.employee.filter(emp => emp.empId === id);
    console.log(employeee);
    this.setState({ employeee: employeee[0] });
  };
  deleteEmp = id => {
    const employee = this.state.employee.filter(emp => emp.empId !== id);
    this.setState({ employee });
  };
  updateEmp = event => {
    event.preventDefault();
    const emp = this.state.employeee;
    const employee = this.state.employee;
    const indx = this.state.employee.indexOf(emp);
    employee[indx] = emp;
    this.setState({ employee });
    console.log(indx);
  };
  handleInputField = event => {
    const employeee = this.state.employeee;
    const { name, value } = event.currentTarget;
    employeee[name] = value;
    console.log("employee", employeee);
    this.setState({ employeee });
  };
  render() {
    const { employee } = this.state;
    return (
      <div>
        <Employe
          employee={employee}
          deleteEmp={this.deleteEmp}
          updateEmp={this.updateEmp}
          getEmp={this.getEmp}
          employe={this.state.employe}
          handleInputField={this.handleInputField}
        />
        <Registration
          handleInputField={this.handleInputField}
          addEmp={this.addEmp}
        />
      </div>
    );
  }
}

export default Employee;
