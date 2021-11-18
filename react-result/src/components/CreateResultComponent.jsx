import React, { Component } from 'react'
import ResultService from '../services/ResultService';
class CreateResultComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
            // step 2
            id: this.props.match.params.id,
            registrationno: '',
            name: '',
            sem: '',
            subjectcode: '',
            subjectname: '',
            subjecttype: '',
            subjectcredit: '',
            grade: ''
        }
        this.changenameHandler = this.changenameHandler.bind(this);
        this.changeregistrationnoHandler = this.changeregistrationnoHandler.bind(this);
        this.changesemHandler = this.changesemHandler.bind(this);
        this.changesubjectcodeHandler = this.changesubjectcodeHandler.bind(this);
        this.changesubjectnameHandler = this.changesubjectnameHandler.bind(this);
        this.changesubjecttypeHandler = this.changesubjecttypeHandler.bind(this);
        this.changesubjectcreditHandler = this.changesubjectcreditHandler.bind(this);
        this.changegradeHandler = this.changegradeHandler.bind(this);
        this.saveOrupdateEmployee = this.saveOrupdateEmployee.bind(this);

    }

    // step 3
    componentDidMount() {

        // step 4
        if (this.state.id === '_add') {
            return
        } else {
            ResultService.getEmployeeById(this.state.id).then((res) => {
                let employee = res.data;
                this.setState({
                    name: employee.name,
                    registrationno: employee.registrationno,
                    sem: employee.sem,
                    subjectcode: employee.subjectcode,
                    subjectname: employee.subjectname,
                    subjecttype: employee.subjecttype,
                    subjectcredit: employee.subjectcredit,
                    grade: employee.grade
                });
            });
        }
    }
    saveOrupdateEmployee = (e) => {
        e.preventDefault();
        let employee = { name: this.state.name, registrationno: this.state.registrationno, sem: this.state.sem, subjectcode: this.state.subjectcode, subjectname: this.state.subjectname, subjecttype: this.state.subjecttype, subjectcredit: this.state.subjectcredit, grade: this.state.grade };
        console.log('employee => ' + JSON.stringify(employee));

        // step 5
        if (this.state.id === '_add') {
            ResultService.createEmployee(employee).then(res => {
                this.props.history.push('/employees');
            });
        } else {
            ResultService.updateEmployee(employee, this.state.id).then(res => {
                this.props.history.push('/employees');
            });
        }
    }

    changenameHandler = (event) => {
        this.setState({ name: event.target.value });
    }

    changeregistrationnoHandler = (event) => {
        this.setState({ registrationno: event.target.value });
    }

    changesemHandler = (event) => {
        this.setState({ sem: event.target.value });
    }
    changesubjectcodeHandler = (event) => {
        this.setState({ subjectcode: event.target.value });
    }
    changesubjectnameHandler = (event) => {
        this.setState({ subjectname: event.target.value });
    }
    changesubjecttypeHandler = (event) => {
        this.setState({ subjecttype: event.target.value });
    }
    changesubjectcreditHandler = (event) => {
        this.setState({ subjectcredit: event.target.value });
    }
    changegradeHandler = (event) => {
        this.setState({ grade: event.target.value });
    }
    cancel() {
        this.props.history.push('/employees');
    }

    getTitle() {
        if (this.state.id === '_add') {
            return <h3 className="text-center">Add Student</h3>
        } else {
            return <h3 className="text-center">Update Student</h3>
        }
    }
    render() {
        return (
            <div>
                <br></br>
                <div className="container">
                    <div className="row">
                        <div className="card col-md-6 offset-md-3 offset-md-3">
                            {
                                this.getTitle()
                            }
                            <div className="card-body">
                                <form>
                                    <div className="form-group">
                                        <label> Name: </label>
                                        <input placeholder=" Name" name="name" className="form-control"
                                            value={this.state.name} onChange={this.changenameHandler} />
                                    </div>
                                    <div className="form-group">
                                        <label> Registration No: </label>
                                        <input placeholder="Registration No" name="registrationno" className="form-control"
                                            value={this.state.registrationno} onChange={this.changeregistrationnoHandler} />
                                    </div>
                                    <div className="form-group">
                                        <label> Sem: </label>
                                        <input placeholder="Sem" name="sem" className="form-control"
                                            value={this.state.sem} onChange={this.changesemHandler} />
                                    </div>

                                    <div className="form-group">
                                        <label> Subject Code: </label>
                                        <input placeholder="Subject Code" name="subjectcode" className="form-control"
                                            value={this.state.subjectcode} onChange={this.changesubjectcodeHandler} />
                                    </div>

                                    <div className="form-group">
                                        <label> Subject Name: </label>
                                        <input placeholder="Subject Name" name="subjectname" className="form-control"
                                            value={this.state.subjectname} onChange={this.changesubjectnameHandler} />
                                    </div>

                                    <div className="form-group">
                                        <label> Subject Type: </label>
                                        <input placeholder="Subject Type" name="subjecttype" className="form-control"
                                            value={this.state.subjecttype} onChange={this.changesubjecttypeHandler} />
                                    </div>

                                    <div className="form-group">
                                        <label> Subject Credit: </label>
                                        <input placeholder="Subject Credit" name="subjectcredit" className="form-control"
                                            value={this.state.subjectcredit} onChange={this.changesubjectcreditHandler} />
                                    </div>

                                    <div className="form-group">
                                        <label> Grade: </label>
                                        <input placeholder="Grade" name="grade" className="form-control"
                                            value={this.state.grade} onChange={this.changegradeHandler} />
                                    </div>

                                    <button className="btn btn-success" onClick={this.saveOrupdateEmployee}>Save</button>
                                    <button className="btn btn-danger" onClick={this.cancel.bind(this)} style={{ marginLeft: "10px" }}>Cancel</button>
                                </form>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        )
    }
}

export default CreateResultComponent
