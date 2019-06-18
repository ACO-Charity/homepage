import React from 'react'
import PropTypes from 'prop-types'
import Link from 'next/link'

class Menu extends React.Component {
    static PropTypes = {
        items: PropTypes.array
    }

    renderItems(items) {
        return (
            <p>{items.name}</p>
        )
    }

    render() {
        console.log(this.props);
        const { items } = this.props
        return (
            <div className='menu'>
                {items && items.map(item => this.renderItems(item))}
            </div>
        )
    }
}

export default Menu 