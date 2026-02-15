import AlternateEmailIcon from '@mui/icons-material/AlternateEmail'
import PhoneIcon from '@mui/icons-material/Phone'
import LinkedInIcon from '@mui/icons-material/LinkedIn'
import GitHubIcon from '@mui/icons-material/GitHub'
import { CONTACT_INFO } from '@/constants'

const ICONS = [
    {
        href: `mailto:${CONTACT_INFO.EMAIL}`,
        icon: <AlternateEmailIcon style={{ fontSize: 32 }} />,
        label: 'Email'
    },
    {
        href: `tel:${CONTACT_INFO.PHONE}`,
        icon: <PhoneIcon style={{ fontSize: 32 }} />,
        label: 'Phone'
    },
    {
        href: CONTACT_INFO.LINKEDIN,
        icon: <LinkedInIcon style={{ fontSize: 32 }} />,
        label: 'LinkedIn'
    },
    {
        href: CONTACT_INFO.GITHUB,
        icon: <GitHubIcon style={{ fontSize: 30 }} />,
        label: 'GitHub'
    }
]

export const Footer = () => (
    <footer className='text-center pt-5 pb-3' style={{ opacity: 0.6 }}>
        <div>
            Copyright © Ryan Jones {new Date().getFullYear()}
        </div>
        <div className='mt-1'>
            {ICONS.map(({ href, icon, label }) => (
                <a
                    key={label}
                    href={href}
                    style={{ color: 'white' }}
                    aria-label={label}
                    target={href.startsWith('http') ? '_blank' : undefined}
                    rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
                >
                    {icon}
                </a>
            ))}
        </div>
    </footer>
)