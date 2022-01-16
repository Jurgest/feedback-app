import React from 'react';
import { Link } from 'react-router-dom';
import Card from '../components/shared/Card';

const About = () => {
    return (
            <Card>
                <div className='about'>
                    <h1>About this Project</h1>
                    <p>this is a React app for feedback</p>
                    <p>Version: 1.0</p>
                    <p>
                         <Link to='/'>Back to Home</Link>
                    </p>
                </div>
            </Card>
    )
}

export default About;
