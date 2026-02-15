import { ProgressBar } from 'react-bootstrap'
import styles from '@/styles/components.module.scss'

export const SkillProgressBar = ({ label, progress }) => (
    <div className={styles.progressWrapper}>
        <div className={styles.progressLabel}>{label}</div>
        <ProgressBar
            now={progress}
            label={`${progress}%`}
            variant='success'
            className={styles.progressBar}
        />
    </div>
)