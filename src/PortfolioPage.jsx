import { Container } from "react-bootstrap"
import Markdown from "react-markdown"

export const PortfolioPage = ({ markdown }) => {
    // thinking that this is overkill and will limit what I can do - instead make each page separately but with template
    //rjones.dev, ryanmjones.co.uk, rjones.uk, ryanjones.uk.com, rjones.co, 
    // decide on structure
    // then import json per page and pass to this component

    // template:
    // container
    // components = Header, Card, 
    // sections = Overview, Key Details / Features, 

    return (
        <div className="portfolio text-white">
            <Container className="pt-4">
                <Markdown>
                    {markdown}
                </Markdown>
            </Container>
        </div>
    )
}