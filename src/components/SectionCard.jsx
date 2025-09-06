import React from 'react'
import { COLORS } from '@/constants'

export const SectionCard = React.memo(({ title, period, subtitle, description }) => (
    <div
        className='p-2 mb-3 rounded'
        style={{
            background: COLORS.SECTION_CARD_BG,
            borderLeft: `5px solid ${COLORS.PRIMARY}`,
            boxShadow: '0 1px 6px rgba(0,0,0,0.06)'
        }}
    >
        <div className='d-flex justify-content-between align-items-center flex-wrap'>
            <h2 className='mb-1' style={{ fontSize: '1.05rem', fontWeight: 600 }}>
                {title}
            </h2>
            <span
                style={{
                    fontSize: '0.95em',
                    minWidth: '80px',
                    display: 'inline-block',
                    textAlign: 'right'
                }}
            >
                <em>{period}</em>
            </span>
        </div>
        <h3 style={{ fontSize: '0.95em', fontWeight: 400, marginBottom: 5, opacity: 1 }}>
            {subtitle}
        </h3>
        <p style={{ fontSize: '0.92em', opacity: 0.9, marginBottom: 0 }}>
            {description}
        </p>
    </div>
))

SectionCard.displayName = 'SectionCard'
