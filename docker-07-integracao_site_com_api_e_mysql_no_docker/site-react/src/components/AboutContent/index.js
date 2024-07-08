import styles from '@/components/AboutContent/AboutContent.module.css'

const AboutContent = ({aboutsCompanies}) => {

    console.log(aboutsCompanies)

    return(
        <section className={`${styles.content} ${styles.about}`}>
                <div className={styles.maxWidth}>
                    <h2 className={styles.title}>Sobre a empresa</h2>
                </div>

                {aboutsCompanies.map(aboutCompany => (
                    <div key={aboutCompany.id} className={styles.aboutContent}>
                        <div className={`${styles.column} ${styles.left}`}>
                            <img src={`${aboutCompany.image ? aboutCompany.image : ""}`} alt={aboutCompany.title} />
                        </div>
                        <div className={`${styles.column} ${styles.right}`}>
                            <div className={styles.text}>
                                {aboutCompany.title}
                            </div>
                            <p>
                                {aboutCompany.description}
                            </p>
                        </div>
                    </div>
                    ))}
        </section>
    )
}

export default AboutContent