"use client";
import { useState, useEffect } from 'react';
export const useSideMenuLogic = () => {
    const [navState, setNavState] = useState<'open' | 'close'>('close');
    const [navPosition, setNavPosition] = useState<'left' | 'right'>('right');

    useEffect(() => {
        const savedState = localStorage.getItem('navState');
        if (savedState) {
            setNavState(savedState as 'open' | 'close');
        }

        const savedPosition = localStorage.getItem('navPosition');
        if (savedPosition) {
            setNavPosition(savedPosition as 'left' | 'right');
        }
    }, []);

    // navStateが変更されたときにローカルストレージに保存
    useEffect(() => {
        localStorage.setItem('navState', navState);
    }, [navState]);

    // navPositionが変更されたときにローカルストレージに保存
    useEffect(() => {
        localStorage.setItem('navPosition', navPosition);
    }, [navPosition]);

    const openNav = () => {
        setNavState('open');
    };
    const closeNav = () => {
        setNavState('close');
    };

    const toggleNavPosition = () => {
        setNavPosition((prevState) =>
            prevState === 'left' ? 'right' : 'left'
        );
    };

    return {
        navState,
        navPosition,
        openNav,
        closeNav,
        toggleNavPosition,
    };
};
