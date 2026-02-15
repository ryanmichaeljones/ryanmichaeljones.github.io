export const Resume = () => {
    return (
        <div className='resume'>
            <object
                data='./Ryan Jones CV.pdf'
                type='application/pdf'
                width='100%'
                height='100%'
            >
                <p style={{ color: 'white', padding: '2rem', textAlign: 'center' }}>
                    Unable to display PDF.{' '}
                    <a href='./Ryan Jones CV.pdf' target='_blank' rel='noopener noreferrer' style={{ color: '#0d7af6', textDecoration: 'underline' }}>
                        Download Ryan Jones CV.pdf
                    </a>
                </p>
            </object>
        </div>
    )
}