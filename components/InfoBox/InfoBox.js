import Image from 'next/image'
import styles from './InfoBox.module.css'
import exclamationIcon from '../../assets/exclamation.svg'

export function InfoBox({children}) {
    return (
        <div className={styles.infoBox}>
            <div>
                <Image src={exclamationIcon} width={17} height={32} unoptimized />
            </div>
            <div className={styles.content}>
                {children}
            </div>
        </div>
    )
}