import Link from 'next/link';
import styles from './form.module.scss';

export default function About() {
    return (
        <div className={styles.about}>/form/ です
            <Link href="/form/detail" className={styles.a}>
                <span className={styles.span}>form/detail</span>
            </Link>
        </div>

    );
}
