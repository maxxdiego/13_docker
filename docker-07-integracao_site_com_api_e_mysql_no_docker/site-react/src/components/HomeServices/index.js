import styles from '@/components/HomeServices/HomeServices.module.css'
import { BsWifi, BsRocketTakeoff } from "react-icons/bs"
import { FaRegHandshake } from "react-icons/fa"

const HomeServices = ({homesServices}) => {
    return(
        <section className={` ${styles.content} ${styles.services}`}>
                <div className={styles.maxWidth}>
                    <h2 className={styles.title}>{homesServices.servTitle}</h2>
                    <div className={styles.servContent}>
                        <div className={styles.card}>
                            <div className={styles.box}>
                                <i><BsWifi /></i>
                                <div className={styles.text}>{homesServices.servTitleOne}</div>
                                <p>{homesServices.servDescOne}</p>
                            </div>
                        </div>
                        <div className={styles.card}>
                            <div className={styles.box}>
                                <i><BsRocketTakeoff /></i>
                                <div className={styles.text}>{homesServices.servTitleTwo}</div>
                                <p>{homesServices.servDescTwo}</p>
                            </div>
                        </div>
                        <div className={styles.card}>
                            <div className={styles.box}>
                                <i><FaRegHandshake /></i>
                                <div className={styles.text}>{homesServices.servTitleThree}</div>
                                <p>{homesServices.servDescThree}</p>
                            </div>
                        </div>
                    </div>
                </div>
        </section>
    )    
}

export default HomeServices