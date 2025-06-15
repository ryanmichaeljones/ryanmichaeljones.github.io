import AlternateEmailIcon from '@mui/icons-material/AlternateEmail'
import PhoneIcon from '@mui/icons-material/Phone'
import LinkedInIcon from '@mui/icons-material/LinkedIn'
import GitHubIcon from '@mui/icons-material/GitHub'

export const Footer = () => {
    return (
        <footer className="text-center pt-5 pb-3" style={{ opacity: '60%' }}>
            Copyright © Ryan Jones {new Date().getFullYear()}
            <p className="mt-1">
                <a href="mailto:ryanmichaeljonesbusiness@gmail.com" style={{ color: 'white' }}><AlternateEmailIcon style={{ fontSize: '32px' }} /></a>
                <a href="tel:+447930373660" style={{ color: 'white' }}><PhoneIcon style={{ fontSize: '32px' }} /></a>
                <a href="https://www.linkedin.com/in/ryanjonesmichael/" style={{ color: 'white' }}><LinkedInIcon style={{ fontSize: '32px' }} /></a>
                <a href="https://github.com/ryanmichaeljones" style={{ color: 'white' }}><GitHubIcon style={{ fontSize: '30px' }} /></a>
            </p>
        </footer>
    )
}

// const IconLink = ({ href, icon }) => 