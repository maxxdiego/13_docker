import styles from '@/components/HomeTop/HomeTop.module.css'
import Link from 'next/link'

const HomeTop = ({homesTops}) => {

    //console.log(homesTops)

    return(
    <section className={`imgTop ${styles.content} ${styles.top}`}>
        <style>
            {`.imgTop{
                background: linear-gradient(to right, var(--main-color) 25%, rgba(255, 255, 255, 0)), url(${homesTops.imageTop ? homesTops.imageTop : ""}) no-repeat center;
            }`}
        </style>
        <div className={styles.maxWidth}>
            <div className={styles.topContent}>
                <div className={styles.textOne}>{homesTops.titleOneTop}</div>
                <div className={styles.textTwo}>{homesTops.titleTwoTop}</div>
                <div className={styles.textThree}>{homesTops.titleThreeTop}</div>
                <Link href={`${homesTops.linkBtnTop}`}>{homesTops.textBtnTop}</Link>
            </div>
        </div>
    </section>
    )
}

export default HomeTop