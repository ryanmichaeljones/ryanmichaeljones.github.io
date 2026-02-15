import AlternateEmailIcon from '@mui/icons-material/AlternateEmail'
import PhoneIcon from '@mui/icons-material/Phone'
import LinkedInIcon from '@mui/icons-material/LinkedIn'
import GitHubIcon from '@mui/icons-material/GitHub'
import { CONTACT_INFO } from '@/constants'
import styles from '@/styles/components.module.scss'

const ICONS = [
    {
        href: `mailto:${CONTACT_INFO.EMAIL}`,
        icon: <AlternateEmailIcon className={styles.icon} />,
        label: 'Email'
    },
    {
        href: `tel:${CONTACT_INFO.PHONE}`,
        icon: <PhoneIcon className={styles.icon} />,
        label: 'Phone'
    },
    {
        href: CONTACT_INFO.LINKEDIN,
        icon: <LinkedInIcon className={styles.icon} />,
        label: 'LinkedIn'
    },
    {
        href: CONTACT_INFO.GITHUB,
        icon: <GitHubIcon className={styles.icon} />,
        label: 'GitHub'
    }
]

export const Footer = () => (
    <footer className={styles.footer}>
        <div>
            Copyright © Ryan Jones {new Date().getFullYear()}
        </div>
        <div className='mt-1'>
            {ICONS.map(({ href, icon, label }) => (
                <a
                    key={label}
                    href={href}
                    className={styles.iconLink}
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