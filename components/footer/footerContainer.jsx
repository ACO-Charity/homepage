import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import Footer from './footer'

class FooterContainer extends Component {
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
      < Footer items={this.props.items} />
    )
  }
}

const mapStateToProps = props => {
  const footer = props.footer.footers.main

  return {
    items: footer.items,
    // subItems: menu.items.children
    // pending: props.menu.pending
  }
}

export default connect(
  mapStateToProps
)(FooterContainer)