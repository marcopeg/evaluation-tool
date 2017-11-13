import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import Card from './Card'

const mapState = ({ cards }) => ({
    items: cards.items,
})

const mapDispatch = {}

const Backlog = ({ items }) => (
    <div>
        <h4>Backlog</h4>
        <ul>
            {items.map(item => (
                <li key={item.id}>
                    <Card {...item} />
                </li>
            ))}
        </ul>
    </div>
)

const CardShape = PropTypes.shape({
    id: PropTypes.string,
    title: PropTypes.string,
})

Backlog.propTypes = {
    items: PropTypes.arrayOf(CardShape).isRequired,
}

export default connect(mapState, mapDispatch)(Backlog)
