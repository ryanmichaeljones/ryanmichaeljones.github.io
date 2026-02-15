import { Spinner } from 'react-bootstrap'
import styles from '@/styles/components.module.scss'

export const LoadingSpinner = () => (
    <div className={styles.spinnerContainer}>
        <Spinner animation="border" role="status">
            <span className="visually-hidden">Loading...</span>
        </Spinner>
    </div>
)
