import Image from "next/image";
import logo from '../assets/logo.png'
import { links, resources, socialList } from "@/utils/constants";

import styles from "./footer.module.scss";

export default function Footer () {
    return (
        <section className={styles.footer}>
            <div className={styles.wrapper}>
                <div className={styles.brand}>
                    <div className={styles.logo}>
                        <Image src={logo} alt='Logo' />
                        <p>PG-AGI</p>
                    </div>
                    <div className={styles.social}>
                        {
                            socialList.map((social, i) => (
                                <div key={i}>
                                    <Image src={social} alt='Social Icon' />
                                </div>
                            ))
                        }
                    </div>
                </div>
                <div className={styles.about}>
                    <div className={styles.list}>
                        <h6>Useful Links</h6>
                        {links.map((link, i) => (<span key={i}>{link}</span>))}
                    </div>
                    <div className={styles.list}>
                        <h6>Other Resources</h6>
                        {resources.map((resource, i) => (<span key={i}>{resource}</span>))}
                    </div>
                </div>
            </div>
            <div className={styles.copyright}>
                Copyright©2024PG-AGI
            </div>
        </section>
    )
}
