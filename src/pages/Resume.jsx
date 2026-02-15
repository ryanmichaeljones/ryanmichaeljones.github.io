import styles from '@/styles/pages.module.scss'

export const Resume = () => {
    return (
        <div className={styles.resume}>
            <object
                data='./Ryan Jones CV.pdf'
                type='application/pdf'
                width='100%'
                height='100%'
                aria-label='Ryan Jones CV PDF'
            >
                <p className={styles.resumeFallback}>
                    Unable to display PDF.{' '}
                    <a href='./Ryan Jones CV.pdf' target='_blank' rel='noopener noreferrer'>
                        Download Ryan Jones CV.pdf
                    </a>
                </p>
            </object>
        </div>
    )
}