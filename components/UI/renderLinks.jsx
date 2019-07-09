import React from 'react'
import PropTypes from 'prop-types'

import Link from 'next/link'

const RenderLinks = items => {
    return items && items.map((item, index) => {
        return (
            <li>
                <Link href={item.link}>
                    <a key={index}>
                        {item.name}
                    </a>
                </Link>
            </li>
        )
    }
    )
}

RenderLinks.PropTypes = {
    items: PropTypes.array.isRequired
}

export default RenderLinks