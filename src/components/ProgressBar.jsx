import { ProgressBar } from "react-bootstrap"

export const SkillProgressBar = ({ label, progress }) => (
    <div style={{ marginBottom: '5px' }}>
        <label>{label}</label>
        <ProgressBar
            now={progress}
            label={`${progress}%`}
            variant="success"
            style={{ border: '2px solid white' }}
        />
    </div>
)