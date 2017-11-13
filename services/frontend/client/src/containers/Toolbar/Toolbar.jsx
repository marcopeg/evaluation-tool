import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { withRouter, Route } from 'react-router-dom'
import Grid from 'react-bootstrap/lib/Grid'

import Boards from './Boards'
import Projects from './Projects'

// $FlowFixMe
import styles from './Toolbar.module.styl'

const mapState = ({ settings }) => ({
    appName: settings.name,
})

const mapDispatch = {}

const Toolbar = ({ appName }) => (
    <div className={styles.wrapper}>
        <Grid>
            <div className={styles.inner}>
                <div className={styles.title}>
                    {appName}
                </div>
                <div className={styles.projects}>
                    <Projects />
                </div>
                <Route
                  path={'/p/:projectId'}
                  render={() => (
                      <div className={styles.boards}>
                          <Boards />
                      </div>
                  )}
                />
            </div>
        </Grid>
    </div>
)

Toolbar.propTypes = {
    appName: PropTypes.string.isRequired,
}

export default withRouter(connect(mapState, mapDispatch)(Toolbar))
