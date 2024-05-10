import React, { useState } from 'react';
import styles from "./landing.module.scss";
import Typewriter from 'typewriter-effect';
import Modal from "./base/modal";

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
            <h1>Your Go-To Consultancy For</h1>
            <h1 className={styles.ai}>
                <Typewriter
                options={{
                    strings: ['AI Products', 'AI Solutions', 'AI MVP Design', 'AI Research', 'Idea Validation'],
                    autoStart: true,
                    loop:true,
                }}
                />
            </h1>

            <div className={styles.action}>
                <button className={styles.call} onClick={handleBookCall}>Book a call</button>
                <button className={styles.case}>See Case Studies</button>
            </div>
            <Modal isOpen={isModalOpen} onClose={handleCloseModal} />
        </section>
    )
}