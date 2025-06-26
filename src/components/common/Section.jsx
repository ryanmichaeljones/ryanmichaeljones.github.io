import React from 'react'

export const Section = React.memo(({ title, children }) => (
    <section className='mb-3'>
        <h2 style={{ fontSize: '1em' }}>{title}</h2>
        {children}
    </section>
))

Section.displayName = 'Section'
