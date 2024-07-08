import styles from '@/components/Footer/Footer.module.css'
import Link from 'next/link'

const Footer = () => {
    return(
        <footer className={styles.footer}>
            <span>© 2024 - Developed by: <Link href="https://github.com/maxxdiego">maxxdiego</Link></span>
        </footer>
    )
}

export default Footer