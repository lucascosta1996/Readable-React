import React, { Component } from 'react'

import Up from './Up'
import Down from './Down'
import Score from './Score'

class Vote extends Component {
  render() {
    return(
      <div className="d-flex justify-content-center">
        <Up {...this.props} />
        <Score {...this.props} />
        <Down {...this.props} />
      </div>
    )
  }
}

export default Vote
