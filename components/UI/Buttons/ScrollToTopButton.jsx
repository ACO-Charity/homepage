import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


class TopButton extends React.Component {
    componentDidMount() {
        document.addEventListener('scroll', this.onScroll)
    }

    onScroll() {
        let element = document.getElementById("scroll-to-top");
        if (element) {
            if (window.scrollY >= '200') {
                element.style.visibility = 'visible'
            } else {
                element.style.visibility = 'hidden'
            }
        }
    }

    render() {
        return (
            <div onClick={() => window.scroll({ top: 0, left: 0, behavior: 'smooth' })} id='scroll-to-top' className='scroll-to-top-button'>
                <FontAwesomeIcon icon={["fa", "arrow-circle-up"]} />
            </div>
        )
    }
}

export {
    TopButton
}