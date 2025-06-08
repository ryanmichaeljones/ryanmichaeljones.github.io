import { Container } from "react-bootstrap"
import Markdown from "react-markdown"

export const PortfolioPage = ({ markdown }) => {
    // thinking that this is overkill and will limit what I can do - instead make each page separately but with template
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