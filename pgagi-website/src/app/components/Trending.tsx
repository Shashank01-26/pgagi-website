'use client';
import { useRef } from "react";

import styles from "./trending.module.scss";
import { trendingList } from "@/utils/constants";
  
export default function Trending () {
    const trending = useRef<HTMLDivElement>(null);

    const scrollLeft = () => {
		if (trending.current) trending.current.scrollLeft -= 400;
	};
	const scrollRight = () => {
		if (trending.current) trending.current.scrollLeft += 400;
	};

    return (
        <section className={styles.trending}>
            <h3>{"Here's What's Trending!"}</h3>
            <div className={styles.trendingList} ref={trending}>
                {
                    trendingList.map((trending, i) => (
                        <div 
                            key={i} 
                            className={styles.trendingItem} 
                            style={{backgroundImage: encodeURI(`url(https://source.unsplash.com/random/?${trending.title})`)}}
                        >
                            <h3>{trending.title}</h3>
                            <p>{trending.description}</p>
                        </div>
                    ))
                }
            </div>
            <div className={styles.action}>
                <span onClick={scrollLeft}>{'<'}</span>
                <span onClick={scrollRight}>{'>'}</span>
            </div>
        </section>
    )
}
