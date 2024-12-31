import React from 'react';
import styles from './footer.module.scss';
import Link from 'next/link';

const Footer = () => {
    return (
        <footer className={`${styles.footer} footer`}>
            <nav className={styles.nav}>
                <Link href="/">Home</Link>
                <Link href="/blog">Blog</Link>
                <Link href="/about">About</Link>
                <Link href="/about/detail">About/detail</Link>
                <Link href="/motomachi">motomachi</Link>
            </nav>
        </footer>
    );
};

export default Footer;
