import React, { Component } from 'react'
import ResultService from '../services/ResultService'
class ListResultComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
                results: []
        }
        this.addResult = this.addResult.bind(this);
        this.editResult = this.editResult.bind(this);
        this.deleteResult = this.deleteResult.bind(this);
    }

    deleteResult(id){
        ResultService.deleteResult(id).then( res => {
            this.setState({results: this.state.results.filter(result => result.id !== id)});
        });
    }
    viewResult(id){
        this.props.history.push(`/view-result/${id}`);
    }
    editResult(id){
        this.props.history.push(`/add-result/${id}`);
    }

    componentDidMount(){
        ResultService.getResults().then((res) => {
            this.setState({ results: res.data});
        });
    }

    addResult(){
        this.props.history.push('/add-result/_add');
    }

    render() {
        return (
            <div>
                 <h2 className="text-center">Student Details</h2>
                 <div className = "row">
                    <button className="btn btn-primary" onClick={this.addResult}> Add Result</button>
                 </div>
                 <br></br>
                 <div className = "row">
                        <table className = "table table-striped table-bordered">

                            <thead>
                                <tr>
                                    <th>  Name</th>
                                    <th> Registration No. </th>
                                    <th> Sem</th>
                                    <th> Subject Code</th>
                                    <th> Subject Name</th>
                                    <th> Subject Type</th>
                                    <th> Subject Credit</th>
                                    <th> Grade</th>
                                    <th> Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    this.state.results.map(
                                        result => 
                                        <tr key = {result.id}>
                                             <td> { result.name} </td>   
                                             <td> {result.registrationno}</td>
                                             <td> {result.sem}</td>
                                             <td> {result.subjectcode}</td>
                                             <td> {result.subjectname}</td>
                                             <td> {result.subjecttype}</td>
                                             <td> {result.subjectcredit}</td>
                                             <td> {result.grade}</td>
                                             <td>
                                                 <button onClick={ () => this.editResult(result.id)} className="btn btn-info">Update </button>
                                                 <button style={{marginLeft: "10px"}} onClick={ () => this.deleteResult(result.id)} className="btn btn-danger">Delete </button>
                                                 <button style={{marginLeft: "10px"}} onClick={ () => this.viewResult(result.id)} className="btn btn-info">View </button>
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

export default ListResultComponent
