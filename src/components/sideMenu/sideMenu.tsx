"use client";
import React from 'react';
import styles from './sideMenu.module.scss';
import Link from 'next/link';
import { useSideMenuLogic } from './sideMenuLogic';
import { LuArrowLeftToLine, LuArrowRightToLine } from 'react-icons/lu';
import { BsLayoutSidebarReverse, BsLayoutSidebar } from 'react-icons/bs';

const SideMenu = () => {
    const {
        navState,
        navPosition,
        openNav,
        closeNav,
        toggleNavPosition,
    } = useSideMenuLogic();

    return (
        <nav
            className={`${styles.root}`}
            data-state={navState}
            data-position={navPosition}
        >
            <ul className={styles.ul}>
                <li
                    className={styles.li}
                >
                    <Link href="/" className={styles.a} onClick={closeNav}>
                        <span className={styles.span}>Home</span>
                    </Link>
                </li>
                <li
                    className={styles.li}
                >
                    <Link href="/button" className={styles.a} onClick={closeNav}>
                        <span className={styles.span}>Button</span>
                    </Link>
                </li>
                <li
                    className={styles.li}
                >
                    <Link href="/form" className={styles.a} onClick={closeNav}>
                        <span className={styles.span}>Form</span>
                    </Link>
                </li>
            </ul>
            <ul className={styles.menu}>
                <li>
                    <button
                        type="button"
                        aria-label="閉じる"
                        className={styles.button_close}
                        onClick={closeNav}
                    >
                        {navPosition === 'left' ? (
                            <LuArrowLeftToLine />
                        ) : (
                            <LuArrowRightToLine />
                        )}
                    </button>
                </li>
                <li>
                    <button
                        type="button"
                        aria-label="メニュー配置変えボタン"
                        className={styles.button_position}
                        onClick={toggleNavPosition}
                    >
                        {navPosition === 'left' ? (
                            <BsLayoutSidebarReverse />
                        ) : (
                            <BsLayoutSidebar />
                        )}
                    </button>
                </li>
            </ul>
            <button
                type="button"
                aria-label="開く"
                className={styles.button_open}
                onClick={openNav}
            />
        </nav>
    );
};

export default SideMenu;
