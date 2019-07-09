import React from 'react'
import { Container, Row, Col } from 'reactstrap'

import RenderLinks from '../UI/RenderLinks'
import { TopButton } from '../UI/Buttons/ScrollToTopButton';

class Footer extends React.Component {
    renderCols = () => {
        const { items } = this.props

        return items && items.map((item, index) => {
            return (
                <Col className='footer-links' key={index}>
                    <ul>
                        {RenderLinks(item.children)}
                    </ul>
                </Col>
            )
        })
    }

    render() {
        console.log("footer props:", this.props);

        return (
            <footer className='footer'>
                <Container>
                    <Row>
                        {this.renderCols()}
                    </Row>
                    <TopButton></TopButton>
                </Container>
            </footer>
        )
    }
}

export default Footer