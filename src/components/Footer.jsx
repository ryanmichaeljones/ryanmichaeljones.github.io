import AlternateEmailIcon from '@mui/icons-material/AlternateEmail'
import PhoneIcon from '@mui/icons-material/Phone'
import LinkedInIcon from '@mui/icons-material/LinkedIn'
import GitHubIcon from '@mui/icons-material/GitHub'

const ICONS = [
    {
        href: "mailto:ryanmichaeljonesbusiness@gmail.com",
        icon: <AlternateEmailIcon style={{ fontSize: 32 }} />,
        label: "Email"
    },
    {
        href: "tel:+447930373660",
        icon: <PhoneIcon style={{ fontSize: 32 }} />,
        label: "Phone"
    },
    {
        href: "https://www.linkedin.com/in/ryanjonesmichael/",
        icon: <LinkedInIcon style={{ fontSize: 32 }} />,
        label: "LinkedIn"
    },
    {
        href: "https://github.com/ryanmichaeljones",
        icon: <GitHubIcon style={{ fontSize: 30 }} />,
        label: "GitHub"
    }
]

export const Footer = () => (
    <footer className="text-center pt-5 pb-3" style={{ opacity: 0.6 }}>
        <div>
            Copyright © Ryan Jones {new Date().getFullYear()}
        </div>
        <div className="mt-1">
            {ICONS.map(({ href, icon, label }) => (
                <a
                    key={label}
                    href={href}
                    style={{ color: 'white' }}
                    aria-label={label}
                    target={href.startsWith('http') ? "_blank" : undefined}
                    rel={href.startsWith('http') ? "noopener noreferrer" : undefined}
                >
                    {icon}
                </a>
            ))}
        </div>
    </footer>
)