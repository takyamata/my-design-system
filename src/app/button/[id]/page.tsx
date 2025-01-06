"use client";
import { useParams } from 'next/navigation';
import styles from './detail.module.scss';
import Button from '@/components/button/button';  // ← ボタンコンポーネントをインポート

export default function ButtonDetail() {
    const { id } = useParams();  // パラメータ取得
    const buttonProps = getButtonPropsById(id);  // idに応じてpropsを取得

    return (
        <div className={styles.detail}>
            <h1>Button ID: {id}</h1>
            <Button {...buttonProps}>
                {buttonProps.children}
            </Button>
        </div>
    );
}

// idに応じたpropsを返す関数
function getButtonPropsById(id: string | string[] | undefined) {
    switch (id) {
        case '1':
            return {
                children: 'Primary Button',
                variant: 'primary',
                onClick: () => alert('Primary Button Clicked'),
            };
        case '2':
            return {
                children: 'Secondary Button',
                variant: 'secondary',
                onClick: () => alert('Secondary Button Clicked'),
            };
        case '3':
            return {
                children: 'Tertiary Button',
                variant: 'tertiary',
                onClick: () => alert('Tertiary Button Clicked'),
            };
        default:
            return {
                children: 'Default Button',
                variant: 'transparent',
                onClick: () => alert('Default Button Clicked'),
            };
    }
}