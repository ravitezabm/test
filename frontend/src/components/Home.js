
import React from 'react';
import { Link } from 'react-router-dom';

const home = () => (
    <div className='container'>
        <div className="jumbotron mt-5">
            <h1 className="display-4">Welcome to ABHI Bloggs</h1>
            <p className="lead">Lets make it aewsome</p>
            <hr className="my-4" />
            <p>Tap here to go to our blog.</p>
            <Link className="btn btn-primary btn-lg" to='/blog' role="button">Watch our Blog</Link>
        </div>
    </div>
);

export default home;