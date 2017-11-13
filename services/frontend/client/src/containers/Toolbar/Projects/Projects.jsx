import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { navigateTo } from 'root/history'

import IconMenu from 'material-ui/IconMenu'
import MenuItem from 'material-ui/MenuItem'
import FlatButton from 'material-ui/FlatButton'
import DropIcon from 'material-ui/svg-icons/navigation/arrow-drop-down'

const mapState = ({ projects }) => ({
    projects: projects.items,
    activeProjectId: projects.activeId,
})

const mapDispatch = {}

const defaultLabel = 'Choose Project...'

class Projects extends React.Component {
    state = {
        isOpen: false,
    }

    getProjectTitle = (projectId) => {
        try {
            return this.props.projects
                .filter(project => project.id === projectId)
                .shift()
                .title
        } catch (e) {
            return defaultLabel
        }
    }

    handleChange = (event, value) => {
        if (value) {
            navigateTo(`/p/${value}`)
        } else {
            navigateTo('/')
        }
    }

    render () {
        const { projects, activeProjectId } = this.props

        const items = projects.map(item => (
            <MenuItem
              key={item.id}
              value={item.id}
              primaryText={item.title}
            />
        ))

        const handler = (
            <FlatButton style={{ color: '#fff' }} icon={<DropIcon />}>
                {activeProjectId ? this.getProjectTitle(activeProjectId) : defaultLabel}
            </FlatButton>
        )

        return (
            <div>
                <IconMenu
                  iconButtonElement={handler}
                  value={activeProjectId}
                  onChange={this.handleChange}
                  children={items} // eslint-disable-line
                />
            </div>
        )
    }
}

const ProjectShape = PropTypes.shape({
    id: PropTypes.string,
    title: PropTypes.string,
})

Projects.propTypes = {
    projects: PropTypes.arrayOf(ProjectShape).isRequired,
    activeProjectId: PropTypes.string.isRequired,
}

export default connect(mapState, mapDispatch)(Projects)
