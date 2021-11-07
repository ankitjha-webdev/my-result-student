import React, { Component } from 'react'

export default class ViewResult extends Component {
        
    render() {
        return (
            <div>
                <h3>View Result</h3>
                <form>
                    <div className="form-group">
                        <label>Registration No:</label>
                      <p>  {this.state.results.name}</p>
                        </div>
                        </form>

            </div>
        )
    }
}

