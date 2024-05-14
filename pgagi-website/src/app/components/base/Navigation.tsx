import Image from "next/image";
import logo from '../../assets/logo.png';
import styles from "./navigation.module.scss";
import Link from "next/link";
import { useEffect, useState } from "react";
import clsx from "clsx";
import { whatWeDoLinks } from "@/utils/constants";

export default function Navigation() {
    const [lastScrollTop, setLastScrollTop] = useState(0);
    const [navbarVisible, setNavbarVisible] = useState(true);
    const [whatWeDo, setWhatWeDo] = useState<'solutions' | 'industries' | 'caseStudy'>('solutions');

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
                    <div className={styles.whatWeDo}>
                        <a>What we do</a>
                        <div className={styles.dropdown}>
                            <div className={styles.content}>
                                <span className={styles.background} />
                                <div className={styles.menu}>
                                    <span className={whatWeDo === 'solutions' ? styles.active : ''} onClick={() => setWhatWeDo('solutions')}>Solutions</span>
                                    <span className={whatWeDo === 'industries' ? styles.active : ''} onClick={() => setWhatWeDo('industries')}>Industries</span>
                                    <span className={whatWeDo === 'caseStudy' ? styles.active : ''} onClick={() => setWhatWeDo('caseStudy')}>Case Study</span>
                                </div>
                                <div className={styles.dropdownLinks}>
                                    {
                                        whatWeDoLinks[whatWeDo].map((link, index) => <a key={index}>{link}</a>)
                                    }
                                </div>
                            </div>
                        </div>
                    </div>
                    <a>What we think</a>
                    <a href="https://pgagi.in/aboutus">Who we are</a>
                </div>
                <button className={styles.contact}>Contact us</button>
            </div>
        </nav>
    );
}
