import React from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router'
import { Route } from 'react-router-dom'

import Layout from 'Layouts/DefaultLayout'

import Board from 'Containers/Board'
import Backlog from 'Containers/Backlog'

import Toolbar from 'Containers/Toolbar'

// $FlowFixMe
import styles from './App.module.styl'

const mapState = ({ settings }) => ({
    appName: settings.name,
})

const mapDispatch = {}

const App = () => (
    <Layout>
        <Toolbar />
        <div className={styles.wrapper}>
            <Route
              path={'/p/:projectId'}
              render={({ match }) => (
                  <Route
                    path={`${match.url}/:board`}
                    children={({ match }) => ( // eslint-disable-line
                        <div className={[ styles.column, styles.bigColumn ].join(' ')}>
                            {match
                                ? <Board name={match.params.board} />
                                : <Backlog />}
                        </div>
                    )}
                  />
              )}
            />
        </div>
    </Layout>
)

App.propTypes = {}

export default withRouter(connect(mapState, mapDispatch)(App))
