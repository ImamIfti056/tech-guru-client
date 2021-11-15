import React from 'react';
import about2 from '../../../images/about-2.png';

const About = () => {
    return (
        <div className='container'>
            <h1 className="text-center text-primary my-5">About US</h1>
            <hr/>
            <div className="row g-2">
                <div className="col-md-6 col-12">
                    <img src={about2} alt="about-img" className="w-100 img-fluid" />
                </div>
                <div className="col-md-6 col-12 m-auto">
                    TechGuru.com is an ISO 9001 registered technology manufacturer, specializing in hard-to-find connectivity parts, primarily used in the information technology and professional A/V industries. StarTech.com services a worldwide market with operations throughout the United States, Canada, Europe, Latin America and Taiwan.
                </div>
            </div>
        </div>
    );
};

export default About;