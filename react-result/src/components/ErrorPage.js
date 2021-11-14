import React from 'react'
import { Link } from 'react-router-dom'
function ErrorPage() {
    return (
        <div>
            <h1>Something went wrong.</h1>
            <p>
                We are sorry for the inconvenience. Please try again later.
            </p>
    
            <div class="text-center pt-2 pb-7">
                <h1 class="remix-caught-status remix-text-glow">
                    <p >4</p>
                    <p>0</p>
                    <p >4</p>
                </h1>
                <div class="text-base font-mono">That page was not found!</div>
               <div className=" text-base font-mono">
                    <Link to="/"> <button className="btn">Go to Home</button> </Link>
                </div>

            </div>
</div>
    )
}

export default ErrorPage
