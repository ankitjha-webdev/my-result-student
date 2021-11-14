import React, { Component } from 'react'

export default class Details extends Component {
    constructor(props) {
        super(props)

        this.state = {
            result: []
        }
        this.addResult = this.addResult.bind(this);
        this.editResult = this.editResult.bind(this);
        this.deleteResult = this.deleteResult.bind(this);
    }

    deleteStudent(id) {
        ResultService.deleteResult(id).then(res => {
            this.setState({ student: this.state.student.filter(student => student.id !== id) });
        });
    }
    viewStudent(id) {
        this.props.history.push(`/view-student/${id}`);
    }
    editStudent(id) {
        this.props.history.push(`/add-student/${id}`);
    }

    componentDidMount() {
        StudentService.getStudent().then((res) => {
            this.setState({ student: res.data });
        });
    }

    addStudent() {
        this.props.history.push('/add-student/_add');
    }
    students(){
       
    }

    render() {
        return (
            <div>
                
                <div className="container">
                    <h2 className="text-center text-white">Students List</h2>
                    <div className="left-container">
                <img src={logo} alt="logo" className="logo" />                                                                               
                    <h2 className="text-center"> Admin Panel</h2>
                    <div className="column">
                        <button className="button btn-primary" onClick={this.addStudent}> Add Student</button>
                    </div>   
                    <h3 className="text-center">Total No. of Students are: {this.state.student.length}</h3>
                </div>
                    <br></br>

                    <table>
                        <thead>
                            <tr>
                                <th> Student First Name</th>
                                <th> Student Last Name</th>
                                <th> Student Email Id</th>
                                <th> Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                this.state.student.map(
                                    student =>
                                        <tr key={student.id}>
                                            <td> {student.firstName} </td>
                                            <td> {student.lastName}</td>
                                            <td> {student.emailId}</td>
                                            <td>
                                                <button onClick={() => this.editStudent(student.id)} className="btn btn-info">Update </button>
                                                <button style={{ marginLeft: "10px" }} onClick={() => this.deleteStudent(student.id)} className="btn btn-danger">Delete </button>
                                                <button style={{ marginLeft: "10px" }} onClick={() => this.viewStudent(student.id)} className="btn btn-info">View </button>
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
