import styles from '@/components/ContactContent/ContactContent.module.css'
import { CiUser, CiLocationOn } from 'react-icons/ci'
import { BsEnvelope } from 'react-icons/bs'

const ContactContent = ({contentsContacts}) => {
    return(
        <div className={`${styles.column} ${styles.left}`}>
            <p>
                {contentsContacts.descContact}
            </p>
        <div className={styles.icons}>
            <div className={styles.row}>
                <i><CiUser /></i>
                <div className={styles.info}>
                    <div className={styles.head}>
                        {contentsContacts.titleCompany}
                    </div>
                    <div className={styles.subTitle}>
                        {contentsContacts.descCompany}
                    </div>
                </div>
            </div>

            <div className={styles.row}>
                <i><CiLocationOn /></i>
                <div className={styles.info}>
                    <div className={styles.head}>
                        {contentsContacts.titleAddress}
                    </div>
                    <div className={styles.subTitle}>
                        {contentsContacts.descAddress}
                    </div>
                </div>
            </div>

            <div className={styles.row}>
                <i><BsEnvelope /></i>
                <div className={styles.info}>
                    <div className={styles.head}>
                        {contentsContacts.titleEmail}
                    </div>
                    <div className={styles.subTitle}>
                        {contentsContacts.descEmail}
                    </div>
                </div>
            </div>
        </div>
    </div>
    )
}

export default ContactContent