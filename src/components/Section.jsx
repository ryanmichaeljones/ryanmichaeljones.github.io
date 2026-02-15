import React from 'react'
import styles from '@/styles/components.module.scss'

export const Section = React.memo(({ title, children }) => (
    <section className={styles.section}>
        <h2 className={styles.sectionTitle}>{title}</h2>
        {children}
    </section>
))

Section.displayName = 'Section'
