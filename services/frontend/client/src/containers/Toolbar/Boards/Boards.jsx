import React from 'react'
import ReactRouterPropTypes from 'react-router-prop-types'
import { withRouter } from 'react-router-dom'
import BoardLink from './BoardLink'

// $FlowFixMe
import styles from './Boards.module.styl'

const Boards = ({ match }) => (
    <div className={styles.wrapper}>
        <BoardLink to={`/p/${match.params.projectId}/`}>Backlog</BoardLink>
        {' '}
        <BoardLink to={`/p/${match.params.projectId}/quadrant`}>Quadrant</BoardLink>
        {' '}
        <BoardLink to={`/p/${match.params.projectId}/moscow`}>MoSCoW</BoardLink>
    </div>
)

Boards.propTypes = {
    match: ReactRouterPropTypes.match.isRequired,
}

export default withRouter(Boards)
