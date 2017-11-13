import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

const Project = ({ id, title }) => (
    <Link to={`/p/${id}`}>
        {title}
    </Link>
)

Project.propTypes = {
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
}

export default Project
