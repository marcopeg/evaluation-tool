import React from 'react'
import PropTypes from 'prop-types'
import { withRouter, Link, Route } from 'react-router-dom'

import RaisedButton from 'material-ui/RaisedButton'

// $FlowFixMe
// import styles from './Boards.module.styl'

const BoardLink = ({ to, children }) => (
    <Route
      exact
      path={to}
      children={({ match }) => ( // eslint-disable-line
          <Link to={to}>
              <RaisedButton
                backgroundColor={match ? '#fff' : '#036'}
                style={{ color: match ? '#666' : '#fff' }}
                children={children} // eslint-disable-line
              />
          </Link>
      )}
    />
)

BoardLink.propTypes = {
    to: PropTypes.string.isRequired,
    children: PropTypes.any, // eslint-disable-line
}

export default withRouter(BoardLink)
