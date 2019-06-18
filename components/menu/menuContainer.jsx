import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import Menu from './menu'

class MenuContainer extends Component {
  static propTypes = {
    items: PropTypes.array.isRequired,
    // subItems: PropTypes.array.isRequired
  }
  state = {}

  render() {
    if (this.props.pending) {
      return <div />
    }
    return (
      < Menu items={this.props.items} />
    )
  }
}

const mapStateToProps = props => {

  const menu = props.menu.menus.main

  return {
    items: menu.items,
    // subItems: menu.items.children
    // pending: props.menu.pending
  }
}

export default connect(
  mapStateToProps
)(MenuContainer)