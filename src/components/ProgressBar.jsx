import { ProgressBar } from 'react-bootstrap'

export const SkillProgressBar = ({ label, progress }) => (
    <div className='mb-1'>
        <div style={{ fontWeight: 500, marginBottom: 1, fontSize: '0.9em' }}>{label}</div>
        <ProgressBar
            now={progress}
            label={`${progress}%`}
            variant='success'
            style={{ 
                border: '1px solid #fff', 
                background: 'rgba(255,255,255,0.08)',
                height: '18px'
            }}
        />
    </div>
)