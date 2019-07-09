import React from 'react'
import PropTypes from 'prop-types'
import Link from 'next/link'
import { Container, Row, Col, Button } from 'reactstrap'

import RenderLinks from '../UI/renderLinks';

class Menu extends React.Component {
    static propTypes = {
        items: PropTypes.array.isRequired
    }

    renderLogo = () => {
        return (
            <Col className='home-logo' md='2'>
                <Link href="/">
                    <a><img src="/static/img/logo/ACO_Bird_3%20750x750.png" alt="" /></a>
                </Link>
            </Col>
        )
    }

    renderMenu = () => {
        const { items } = this.props
        
        return (
            <Col className='menu'>
                <nav className='main-nav float-right'>
                    <ul>
                        {RenderLinks(items)}
                    </ul>
                </nav>
            </Col>
        )
    }

    render() {
        return (
            <header className='header'>
                <Container>
                    <Row>
                        {this.renderLogo()}
                        {this.renderMenu()}
                    </Row>
                </Container>
            </header>
        )
    }
}

export default Menu 