// components/About.js
import Image from 'next/image'

function About() {
    return (
        <section id='about' className="about">
            <div className='about-img'><img src='/RH.png'/></div>

            <div className="about-container">
            <p>
                Founded amidst the star clusters of New Eden, Red Hand Syndicate. Our primary directive? To ensure the safe and profitable exploration of the vast expanses that New Edan has to offer.
            </p>
            <p>
                Beyond commerce and combat, Red Hand Syndicate is a tight-knit community of like-minded individuals. Our belief? That collaboration and camaraderie can turn the tides of any space-faring challenge. Through thick and thin, we soar through the stars together, making our mark and ensuring our legacy in the annals of New Eden.
            </p>
            </div>

        </section>
    );
}

export default About;
