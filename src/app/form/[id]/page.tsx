"use client";
import { useParams } from 'next/navigation';
import styles from './detail.module.scss';

export default function FormDetail() {
    const { id } = useParams();  // ← ここでパラメータを取得

    return (
        <div className={styles.detail}>
            <h1>Form ID: {id}</h1>
            <p>{id}番のフォームです。</p>
        </div>
    );
}