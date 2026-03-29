import { Image } from 'react-bootstrap'
import styles from '@/styles/components.module.scss'

export const ProfileImage = ({ src, alt }) => {
    return (
        <div className={styles.profileContainer}>
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
