'use client';

import Image from "next/image";
import logo from '../../assets/logo.png'

import styles from "./navigation.module.scss";
import Link from "next/link";
import { useEffect, useState } from "react";
import clsx from "clsx";

export default function Navigation () {
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        window.addEventListener("scroll", () => setIsScrolled(window.scrollY > 20));
    }, [])

    return (
        <nav className={clsx(styles.navigation, isScrolled && styles.scrolled)}>
           <div className={styles.banner}>
                 AI Calling Agent - <a href="https://call.toingg.com/" target="_blank" rel="noopener noreferrer">Learn more</a>
                </div>
            <div className={styles.nav}>
                <Link className={styles.logo} href='/'>
                    <Image src={logo} alt='Logo' />
                    <p>PG-AGI</p>
                </Link>
                <div className={styles.links}>
                    <a>What we do</a>
                    <a>What we think</a>
                    <a>Who we are</a>
                </div>
                <button className={styles.contact}>Contact us</button>
            </div>
        </nav>
    )
}