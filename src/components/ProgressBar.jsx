import { ProgressBar } from "react-bootstrap"

export const SkillProgressBar = ({ label, progress }) => {
    return (
        <>
            <label>{label}</label>
            <ProgressBar now={progress} label={`${progress}%`} variant='success' style={{ border: '2px solid white', marginBottom: '5px' }} />
        </>
    )
}