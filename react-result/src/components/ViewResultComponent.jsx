import React, { Component } from 'react'
import ResultService from '../services/ResultService'

class ViewResultComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
            id: this.props.match.params.id,
            employee: {}
        }
    }

    componentDidMount(){
        ResultService.getEmployeeById(this.state.id).then( res => {
            this.setState({employee: res.data});
        })
    }

    render() {
        return (
            <div>
                <br></br>
                <div className = "card col-md-6 offset-md-3">
                    <h3 className = "text-center"> View Employee Details</h3>
                    <div className = "card-body">
                        <div className = "row">
                            <label> Student  Name: </label>
                            <div> { this.state.employee.name }</div>
                        </div>
                        <div className = "row">
                            <label> Student Registration Number: </label>
                            <div> { this.state.employee.registrationno }</div>
                        </div>
                        <div className = "row">
                            <label> Student Semester: </label>
                            <div> { this.state.employee.sem }</div>
                        </div>
                        <div className = "row">
                            <label> Student Subject Code: </label>
                            <div> { this.state.employee.subjectcode }</div>
                        </div>
                        <div className = "row">
                            <label> Student Subject Name: </label>
                            <div> { this.state.employee.subjectname }</div>
                        </div>
                        <div className = "row">
                            <label> Student Subject Type: </label>
                            <div> { this.state.employee.subjecttype }</div>
                        </div>
                        <div className = "row">
                            <label> Student Subject Credit: </label>
                            <div> { this.state.employee.subjectcredit }</div>
                        </div>
                        <div className = "row">
                            <label> Student Grade: </label>
                            <div> { this.state.employee.grade }</div>
                        </div>
                    </div>

                </div>
            </div>
        )
    }
}

export default ViewResultComponent
