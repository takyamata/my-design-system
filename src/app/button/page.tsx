import styles from './button.module.scss';
import Link from 'next/link';

export default function Blog() {
    return (
        <div className={styles.blog}>/button/ です
            <Link href="/button/1" className={styles.a}>
                <span className={styles.span}>button/1</span>
            </Link>
            <Link href="/button/2" className={styles.a}>
                <span className={styles.span}>button/2</span>
            </Link>
            <Link href="/button/3" className={styles.a}>
                <span className={styles.span}>button/3</span>
            </Link>
        </div>
    );
}