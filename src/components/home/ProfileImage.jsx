import { Image } from 'react-bootstrap'
import styles from '@/styles/components.module.scss'

export const ProfileImage = ({ src, alt }) => {
    return (
        <div className={styles.profileContainer}>
            <div 
                className={styles.blurEffect}
                style={{ backgroundImage: `url(${src})` }}
            />
            <Image
                src={src}
                roundedCircle
                alt={alt}
                loading='lazy'
                decoding='async'
                className={styles.profileImage}
            />
        </div>
    )
}
