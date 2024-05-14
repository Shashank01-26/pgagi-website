import { TypeAnimation } from 'react-type-animation';
import React, { useState } from 'react';
import styles from "./landing.module.scss";
import Typewriter from 'typewriter-effect';
// import Modal from "./base/modal";
import BookCalendly from './base/bookACall';
import BookCallModal from './base/bookCallModela';

export default function Landing () {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const handleBookCall = () => {
        setIsModalOpen(true);
    };

    const handleCloseModal = () => {
        setIsModalOpen(false);
    };

    return (
        <section className={styles.landing}>
            <h6>Start your AI journey with us</h6>
            <h1>Your Go-To AI Consultancy For</h1>
            <h1 className={styles.ai}>
            <TypeAnimation
                        sequence={[
                                    "AI MVP Design",
                                    1000,
                                    ' AI Research',
                                    1000,
                                    ' Idea Validation',
                                    1000,
                                    "AI Solutions",
                                    1000,
                                    "AI Products",
                                    1000
                                ]}
                                wrapper="span"
                                speed={50}
                                // style={{ display: 'inline-block', color: 'red' }}
                                repeat={Infinity}
                            />
            </h1>
            <div className={styles.action}>
                <button className={styles.call} onClick={handleBookCall}>Book a call</button>
                <button className={styles.case}>See Case Studies</button>
            </div>
            <BookCallModal isOpen={isModalOpen} onClose={handleCloseModal} />
        </section>
    )
}