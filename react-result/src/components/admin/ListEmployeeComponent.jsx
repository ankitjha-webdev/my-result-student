import React, { Component } from 'react'
// import EmployeeService from '../../services/EmployeeService'
import './css/list-student.css'
import axios from 'axios';
class ListEmployeeComponent extends Component {
    // constructor(props) {
    //     super(props)

    //     this.state = {
    //         results: []
    //     }
    //     this.addEmployee = this.addEmployee.bind(this);
    //     this.editEmployee = this.editEmployee.bind(this);
    //     this.deleteEmployee = this.deleteEmployee.bind(this);
    // }

    // deleteEmployee(id) {
    //     EmployeeService.deleteEmployee(id).then(res => {
    //         this.setState({ results: this.state.results.filter(result => result.id !== id) });
    //     });
    // }
    // viewEmployee(id) {
    //     this.props.history.push(`/view-result/${id}`);
    // }
    // editEmployee(id) {
    //     this.props.history.push(`/add-result/${id}`);
    // }

    // componentDidMount() {
    //     EmployeeService.getEmployees().then((res) => {
    //         this.setState({ results: res.data });
    //     });
    // }

    // addEmployee() {
    //     this.props.history.push('/add-result/_add');
    // }
    constructor(props) {
        super(props);
        this.state = {
            results: []
        }   
    }
    componentDidMount() {
        this.findAllResults()
    }
    findAllResults() {
        axios.get('http://localhost:8081/api/result/all')
            .then(response => response.data)
            .then((data) => {
                this.setState({
                    results: data});
                    });
                }
    render() {
        return (
            <div style={{ marginRight: '6em' }}>
                <h2 className="text-center">Student Details</h2>
                {/* <div className = "row">
                    <button className="btn btn-primary" onClick={this.addEmployee}> Add Employee</button>
                 </div> */}
                {/* <br></br> */}
                <div className="row" >
                    <table className="table table-striped table-bordered">

                        <thead>
                            <tr>
                                <th>Name</th>
                                <th>Registration No </th>
                                <th>Sem</th>
                                <th>Subject Code</th>
                                <th>Subject Credit</th>
                                <th>Subject Name</th>
                                <th>Subject Type</th>
                                <th>Grade</th>
                                <th> Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                this.state.results.map(
                                    result =>
                                        <tr key={result.id}>
                                            {/* <td>{result.id}</td> */}
                                            <td>{result.name}</td>
                                            <td>{result.registrationno}</td>
                                            <td>{result.sem}</td>
                                            <td>{result.subjectcode}</td>
                                            <td>{result.subjectcredit}</td>
                                            <td>{result.subjectname}</td>
                                            <td>{result.subjecttype}</td>
                                            <td>{result.grade}</td>
                                            <td>
                                                <button onClick={() => this.editEmployee(result.id)} className="btn btn-info">Update </button>
                                                <button style={{ marginLeft: "10px" }} onClick={() => this.deleteEmployee(result.id)} className="btn btn-danger">Delete </button>
                                                <button style={{ marginLeft: "10px" }} onClick={() => this.viewEmployee(result.id)} className="btn btn-info">View </button>
                                            </td>
                                        </tr>
                                )
                            }
                        </tbody>
                    </table>

                </div>

            </div>
        )
    }
}
export default ListEmployeeComponent