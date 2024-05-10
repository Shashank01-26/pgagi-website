import ais from '../assets/partners/ais.png'
import hx from '../assets/partners/hx.png'
import social from '../assets/partners/social.png'
import ciek from '../assets/partners/ciek.png'
import aixl from '../assets/partners/aixl.png'

import Image from "next/image";

import styles from "./partners.module.scss";

const images = [ais, hx, social, ciek, aixl];
export default function Partners () {
    return (
        <section className={styles.partners}>
            <h3>Partnered with innovators like</h3>
            <div className={styles.partnerList}>
                {
                    images.map((image, i) => (
                        <Image key={i} src={image} alt='Sponsored Partner' />
                    ))
                }
            </div>
        </section>
    )
}
