import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import './style.css'
export default class Result extends Component {
    constructor(props) {
        super(props);
        this.state = {
            results: [],
            reg: ''
        }
        this.getreg = this.getreg.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }
    handleChange({ target }) {
        this.setState({
            [target.name]: target.value
        });
    }
    getreg() {
        axios.get(`http://localhost:8085/api/students/byregno/${this.state.regno}`)
            .then(response => response.data)
            .then((data) => {
                console.log(data)
                this.setState({
                    results: data
                });
            });
    }
    render() {
        return (
            <div>
                 {/* Background circle Start  */}
    <div class="bg-circles">
      <div class="circle-1"></div>
      <div class="circle-2"></div>
      <div class="circle-3"></div>
      <div class="circle-4"></div>
    </div>
    {/* Background circle end  
    Overlay Start */}
    <div class="overlay"></div>
                <section class="contact-section sec-padding" id="contact">
        <div class="container">
          <div class="row">
            <div class="section-title">
              <h2>My Result- Student  </h2>
            </div>
          </div>
          <div class="row">
          <h3>  </h3>
          <Link to="/all">  <button className="btn" id="center1"> All Results</button></Link> 
          <div class="form">
            <h3>Search The Results!</h3>
            
            <div class="row" id="form">
                <div class="input-group">
                    <input
                    onChange={this.handleChange}
                      type="text"
                      name="regno"
                      placeholder="Reg. No"
                      class="input-control"
                      required
                    />
                  </div>
                  
                   </div>
                   <button type="submit" class="btn" value="Send" onClick={this.getreg}>Get Result!</button>
                  
            </div>
            
              </div>
          
          </div>
          
                {/* <h1>Enter Your Registration Number</h1>
                <input
                    type="text"
                    name="regno"
                    placeholder="Enter topic here..."
                    
                    onChange={this.handleChange}
                /> <br />
                <button value="Send" onClick={this.getreg}>get Result</button> */}
             <div className="container">
                 <div className="row"> 
                
                 {this.state.results.length ===0 ? <h3>No Result</h3> :
                
           
                <table className="table">
               
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
              
       </section>
            </div>
        )
    }

}
