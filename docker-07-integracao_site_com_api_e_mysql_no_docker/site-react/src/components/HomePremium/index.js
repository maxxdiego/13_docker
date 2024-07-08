import styles from '@/components/HomePremium/HomePremium.module.css'
import Link from 'next/link'

const HomePremium = ({homesPremiums}) => {
    return(
        <section className={`${styles.content} ${styles.premium}`}>
                <div className={styles.maxWidth}>
                    <h2 className={styles.title}>{homesPremiums.premTitle}</h2>
                    <div className={styles.premiumContent}>
                        <div className={`${styles.column} ${styles.left}`}>
                            <img src={`${homesPremiums.premImage ? homesPremiums.premImage : ""}`} alt="Serviço premium" />
                        </div>
                        <div className={`${styles.column} ${styles.right}`}>
                            <div className={styles.text}>
                                {homesPremiums.premSubtitle}
                            </div>
                            <p>
                                {homesPremiums.premDesc}
                            </p>
                            <Link href={`${homesPremiums.premBtnLink}`}>{homesPremiums.premBtnText}</Link>
                        </div>
                    </div>
                </div>
        </section>
    )
}

export default HomePremium