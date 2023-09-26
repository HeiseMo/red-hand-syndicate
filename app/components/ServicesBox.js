// components/ServiceBox.js
import React from 'react';

const ServiceBox = () => {
    return (
        <section className="services">
            <h2>Services</h2>
            <div className='cards'>
                <div className="service-card mining">
                    <h3>Mining Ores</h3>
                    <p>We specialize in extracting the richest ores in the galaxy. Join our mining fleet and maximize your profits.</p>
                </div>

                <div className="service-card ship-building">
                    <h3>Ship Building</h3>
                    <p>From frigates to capital ships, our expert craftsmen build reliable and powerful ships to meet all your needs.</p>
                </div>
            </div>

        </section>
    );
}

export default ServiceBox;
