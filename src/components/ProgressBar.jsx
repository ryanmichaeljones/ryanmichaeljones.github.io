import { ProgressBar } from "react-bootstrap"

export const SkillProgressBar = ({ label, progress }) => (
    <div className="mb-2">
        <div style={{ fontWeight: 500, marginBottom: 2 }}>{label}</div>
        <ProgressBar
            now={progress}
            label={`${progress}%`}
            variant="success"
            style={{ border: '2px solid #fff', background: 'rgba(255,255,255,0.08)' }}
        />
    </div>
)