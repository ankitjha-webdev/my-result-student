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
                    <span >4</span>
                    <span >0</span>
                    <span >4</span>
                </h1>
                <div class="text-base font-mono">That page was not found!</div>
               <div className=" text-base font-mono">
                    <Link to="/">Go to Home</Link>
                </div>

            </div>
</div>
    )
}

export default ErrorPage
