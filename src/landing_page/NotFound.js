import React from "react";
import {Link} from "react-router-dom";

function NotFound() {
    return ( 
        <main>
            <div className='container p-5 mb-4'>
            <div className='row text-center'>
                <h1 className='mt-2'>404 Error: Page Not Found.</h1>
                <p>The page you are looking for does not Exist.</p>
                <Link to="/" className='btn btn-primary col-2 m-auto lh-lg fs-5' >Go To Home</Link>
            </div>
        </div>
        </main>
     );
}

export default NotFound;