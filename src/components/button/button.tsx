import React from 'react';
import styles from './button.module.scss';

type ButtonProps = {
    children: React.ReactNode;
    variant?: 'primary' | 'secondary' | 'tertiary' | 'transparent' | string;
    disabled?: boolean;
    onClick?: () => void;
};

const Button: React.FC<ButtonProps> = ({ children, variant = 'primary', disabled = false, onClick }) => {
    return (
        <button className={`${styles.button} ${styles[variant]}`} disabled={disabled} onClick={onClick}>
            {children}
        </button>
    );
};

export default Button;
