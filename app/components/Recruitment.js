// components/Recruitment.js

import React from 'react';

function Recruitment() {
    return (
        <section id="recruitment" className="recruitment-section">
            <h2>Recruitment</h2>
            <p>We are always on the lookout for dedicated pilots to join our ranks. If you have a passion for the stars and want to be part of a tight-knit community, Red Hand Syndicate is the place for you.</p>
            
            <div className="recruitment-details">
                <ul>
                    <li>Active participation in corp activities.</li>
                    <li>Willingness to learn and collaborate.</li>
                    <li>Respect for all members and allies.</li>
                </ul>
            </div>

            <div className="apply-button-container">
                <a href='https://discord.gg/mxxYwMUesQ'>
                <button className="apply-button">Apply Now</button>
                </a>
            </div>
        </section>
    );
}

export default Recruitment;
