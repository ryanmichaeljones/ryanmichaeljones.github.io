export const Resume = () => {
    return (
        <object
            data="/Ryan Jones CV.pdf"
            type="application/pdf"
            width="100%"
            height="100%"
            style={{height: 'calc(100% - 56px)'}}
        >
            <p>
                Unable to display PDF.{' '}
                <a href="/Ryan Jones CV.pdf" target="_blank" rel="noopener noreferrer">
                    Download Ryan Jones CV.pdf
                </a>
            </p>
        </object>
    )
}