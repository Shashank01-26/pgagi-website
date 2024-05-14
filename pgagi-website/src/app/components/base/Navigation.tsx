import Image from "next/image";
import logo from '../../assets/logo.png';
import styles from "./navigation.module.scss";
import Link from "next/link";
import { useEffect, useState } from "react";
import clsx from "clsx";

export default function Navigation() {
    const [lastScrollTop, setLastScrollTop] = useState(0);
    const [navbarVisible, setNavbarVisible] = useState(true);

    useEffect(() => {
        const handleScroll = () => {
            let currentScrollPos = window.pageYOffset;
            if (currentScrollPos > lastScrollTop) {
                // Scrolling down
                setNavbarVisible(false);
            } else {
                // Scrolling up
                setNavbarVisible(true);
            }
            setLastScrollTop(currentScrollPos); // Update lastScrollTop
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, [lastScrollTop]);

    return (
        <nav className={styles.navigation}>
            <div className={styles.banner}>
                AI Calling Agent - <a href="https://call.toingg.com/" target="_blank" rel="noopener noreferrer">Learn more</a>
            </div>
            <div className={clsx(styles.nav, !navbarVisible && styles.navHidden)}>
                <Link className={styles.logo} href='/'>
                    <Image src={logo} alt='Logo' width={60} height={60} />
                    <p>PG-AGI</p>
                </Link>
                <div className={styles.links}>
                    <a>What we do</a>
                    <a>What we think</a>
                    <a href="https://pgagi.in/aboutus">Who we are</a>
                </div>
                <button className={styles.contact}>Contact us</button>
            </div>
        </nav>
    );
}
