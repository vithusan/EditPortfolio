import React, { Component } from 'react';

class Contact extends Component {
    render() {
        return (
            <div className='contactDiv'>
                <a href="https://github.com/vithusan" target="_blank">
                    <img src='/img/githubIcon.png' alt="socialMedia" className='contactIcons' />
                </a>
                <a href="mailto:vithushan1011@hotmail.com" target="_top">
                    <img src='/img/emailIcon.png' alt="socialMedia" className='contactIcons' />
                </a>
                <a href="https://www.linkedin.com/in/vithusan-kanageswaran/" target="_blank">
                    <img src='/img/linkedinIcon.png' alt="socialMedia" className='contactIcons' />
                </a>
            </div>
        );
    }
}

export default Contact;