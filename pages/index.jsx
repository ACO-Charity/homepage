import React from 'react'
import { connect } from 'react-redux'

import MenuContainer from '../components/menu/menuContainer'
import TodoList from '../components/todoList'

import * as menuAction from '../actions/menuAction'

class Index extends React.Component {
    static getInitialProps({ reduxStore, req }) {
        // const isServer = !!req
        // DISPATCH ACTIONS HERE ONLY WITH `reduxStore.dispatch`
        // reduxStore.dispatch(serverRenderClock(isServer))

        return {}
    }

    renderWidgets() {
        console.log("widgets", this.props);
        
        const { widgets } = this.props

        if (widgets && widgets.length > 0) {
            return <WidgetLayout widgets={widgets} />
        }
        return null
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
    }

    render() {
        return (
            <div className='content'>
                <MenuContainer />
                {/* <TodoList /> */}
                {this.renderError()}
                {this.renderPending()}
                {this.renderWidgets()}
            </div>
        )
    }
}

const mapStateToProps = store => {
    console.log(store)
    const { menu } = store
    return menu
}

const mapDispatchToProps = dispatch => {
    return {
        loadMenu: (id) => {
            dispatch(menuAction.loadMenu(id))
        }
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Index)