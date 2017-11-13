import React from 'react'
import PropTypes from 'prop-types'

const Card = ({ title }) => (
    <div>{title}</div>
)

Card.propTypes = {
    // id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
}

export default Card
