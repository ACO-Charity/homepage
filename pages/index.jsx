import React from 'react'
import { connect } from 'react-redux'

import * as menuAction from '../actions/menuAction'
import * as footerAction from '../actions/footerAction'

import MenuContainer from '../components/menu/menuContainer'
import FooterContainer from '../components/footer/footerContainer'

import TodoList from '../components/todoList'
import Images from '../components/images'


class Index extends React.Component {
    static getInitialProps({ reduxStore, req }) {
        // const isServer = !!req
        // DISPATCH ACTIONS HERE ONLY WITH `reduxStore.dispatch`
        // reduxStore.dispatch(serverRenderClock(isServer))
        return {}
    }

    renderWidgets() {
        return (
            <body>
                <TodoList />
                <Images />
            </body>
        )

        // console.log("widgets", this.props);
        // const { widgets } = this.props

        // if (widgets && widgets.length > 0) {
        //     return <WidgetLayout widgets={widgets} />
        // }
        // return null
    }

    renderPending() {
        const { pending } = this.props

        if (pending) {
            return (<span>Loading</span>)
        }

        return null
    }

    renderError() {
        const { error } = this.props

        if (error !== null && error.message) {
            return (
                <Container>
                    <Alert color="danger">
                        <FontAwesomeIcon icon={['fal', 'exclamation-triangle']} />
                        {error.message}
                    </Alert>
                </Container>
            )
        }

        return null
    }

    componentDidMount() {
        this.props.loadMenu(1)
        this.props.loadFooter(1)
    }

    render() {
        return (
            <div className='content'>
                <MenuContainer />
                {this.renderError()}
                {this.renderPending()}
                {this.renderWidgets()}
                <FooterContainer />
            </div>
        )
    }
}

const mapStateToProps = store => {
    // console.log("index store", store)
    const { menu, footer } = store
    return menu, footer
}

const mapDispatchToProps = dispatch => {
    return {
        loadMenu: (id) => {
            dispatch(menuAction.loadMenu(id))
        },
        loadFooter: (id) => {
            dispatch(footerAction.loadFooter(id))
        }
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps)(Index)