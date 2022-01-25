import React, { Component } from "react";
import Service from "./Service";
// import Button from "react-bootstrap/Button";



export class ListEmployee extends Component {
    constructor(props) {
        super(props);
        this.state = {
          employees: [],
        };
      }   
      componentDidMount() {
        Service.getEmployees().then((res) => {
          this.setState({ employees: res.data });
        });
      }
     
    render() {
        return (
            <div>
        <h2 className="text-center">Employees List</h2>
        <div className="row" padding=""></div>
        <div className="row">
          <table className="table table-striped table-bordered">
            <thead>
              <tr>
                <th>Student name</th>
                <th>last name</th>
                <th>foreign</th>
               
                <th></th>
              </tr>
            </thead>
            <tbody>
            {this.state.employees.map((karem) => (
                <tr key={karem.id}>
                  <td> {karem.name} </td>
                  <td> {karem.bootcamp.location}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
            </div>
        )
    }
}

export default ListEmployee
