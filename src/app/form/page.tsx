import Link from 'next/link';
import styles from './form.module.scss';

export default function Form() {
    return (
        <div className={styles.form}>/form/ です
            <Link href="/form/1" className={styles.a}>
                <span className={styles.span}>form/1</span>
            </Link>
            <Link href="/form/2" className={styles.a}>
                <span className={styles.span}>form/2</span>
            </Link>
            <Link href="/form/3" className={styles.a}>
                <span className={styles.span}>form/3</span>
            </Link>
        </div>

    );
}
