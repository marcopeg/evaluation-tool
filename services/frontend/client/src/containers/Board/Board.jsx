import React from 'react'
import PropTypes from 'prop-types'
import BoardQuadrant from './BoardQuadrant'
import BoardMoscow from './Moscow'

// $FlowFixMe
import styles from './Board.module.styl'

const boardsMap = {
    quadrant: BoardQuadrant,
    moscow: BoardMoscow,
}

const Board = ({ name }) => (
    <div className={styles.board}>
        {React.createElement(boardsMap[name])}
    </div>
)

Board.propTypes = {
    name: PropTypes.oneOf([ 'quadrant', 'moscow' ]).isRequired,
}

export default Board
