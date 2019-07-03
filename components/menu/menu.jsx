import React from 'react'
import PropTypes from 'prop-types'
import { Container, Row, Col, Button } from 'reactstrap'
import Link from 'next/link'

class Menu extends React.Component {
    static PropTypes = {
        items: PropTypes.array
    }

    renderLogo = () => {
        return (
            <Col className='home-logo' md='2'>
                LOGO
            </Col>
        )
    }

    renderMenu = items => {
        return (
            <Col className='menu'>
                <nav className='main-nav float-right'>
                    <ul>
                        {items && items.map(item => this.renderItems(item))}
                    </ul>
                </nav>
            </Col>
        )
    }

    renderItems = items => {
        return (
            <li>
                <Link href={items.link}>
                    <a>
                        {items.name}
                    </a>
                </Link>
            </li>
        )
    }

    render() {
        const { items } = this.props
        return (
            <header className='header fixed-top'>
                <Container>
                    <Row>
                        {this.renderLogo()}
                        {this.renderMenu(items)}
                    </Row>
                </Container>
            </header>
        )
    }
}

export default Menu 