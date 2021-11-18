import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
export default class All extends Component {
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
        axios.get('http://localhost:8085/api/students/all')
            .then(response => response.data)
            .then((data) => {
                this.setState({
                    results: data});
                    });
                }

    render() {
        return (
            <div>
                <div class="bg-circles">
      <div class="circle-1"></div>
      <div class="circle-2"></div>
      <div class="circle-3"></div>
      <div class="circle-4"></div>
    </div>
    {/* Background circle end  
    Overlay Start */}
    {/* <div class="overlay"></div>
                <section class="contact-section sec-padding" id="contact"> </section> */}
            <div class="table-wrapper">
                <h1 >All Results</h1>
                
                <Link to="/" ><button className="btn">Individual Result</button></Link>
                
               
        {this.state.results.length ===0 ? <h3>No Results</h3> :
            <table className="fl-table">
                <thead>
                    <tr>
                        {/* <th>Id</th> */}
                        <th>Name</th>
                        <th>Registration No </th>
                        <th>Sem</th>
                        <th>Subject Code</th>
                        <th>Subject Credit</th>
                        <th>Subject Name</th>
                        <th>Subject Type</th>
                        <th>Grade</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        this.state.results.map(result =>
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
                            </tr>
                        )
                    }
                </tbody>
            </table>
        }
         </div>
         </div>
        
        )
    }
           
}
