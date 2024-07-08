import { useState } from 'react'
import Link from 'next/link'
import styles from '@/components/Menu/Menu.module.css'
import { FaBars } from 'react-icons/fa'
import { IoClose } from "react-icons/io5";

const Menu = () => {

    const [isActive, setIsActive] = useState(false)
    const [menuIcon, setMenuIcon] = useState(<FaBars />)

    const activeMenu = () => {
        setIsActive(!isActive)
        if (!isActive){
            setMenuIcon(<IoClose />)
        } else {
            setMenuIcon(<FaBars />)
        }
    }

    return(
        <nav className={styles.navbar}>
                <div className={styles.maxWidth}>
                    <div className={styles.logo}>
                        <Link href="/">Neotech</Link>
                    </div>

                    {/* isActive && styles.active */}

                    <ul className={`${styles.menu} ${isActive ? styles.active : ""}`} id={styles.menuSite}>
                        <li><Link href="/">Home</Link></li>
                        <li><Link href="/about">Sobre</Link></li>
                        <li><Link href="/contact">Contato</Link></li>
                    </ul>
                    <div className={styles.menuBtn} id={styles.menubtn}>
                        <i id={styles.menuIcon} onClick={activeMenu}>
                            {menuIcon}
                        </i>
                    </div>
                </div>
        </nav>
    )
}

export default Menu