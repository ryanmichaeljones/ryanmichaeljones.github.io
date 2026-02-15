import React from 'react'
import styles from '@/styles/components.module.scss'

export const SectionCard = React.memo(({ title, period, subtitle, description }) => (
    <div className={styles.sectionCard}>
        <div className={styles.sectionCardHeader}>
            <h2 className={styles.sectionCardTitle}>
                {title}
            </h2>
            <span className={styles.sectionCardPeriod}>
                <em>{period}</em>
            </span>
        </div>
        <h3 className={styles.sectionCardSubtitle}>
            {subtitle}
        </h3>
        <p className={styles.sectionCardDescription}>
            {description}
        </p>
    </div>
))

SectionCard.displayName = 'SectionCard'