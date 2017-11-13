import request from 'superagent'

import { fetch as fetchCards } from 'Services/cards-service'

import {
    startLoading,
    loadingComplete,
    setActiveId,
} from 'Reducers/projects-reducer'

export const fetch = () => async (dispatch, getState) => {
    const { settings } = getState()
    let items = []

    dispatch(startLoading())

    try {
        const res = await request.get(`${settings.endpoint}/projects`)
        items = res.body
    } catch (e) {
        alert('Errors while loading projects!') // eslint-disable-line
    } finally {
        dispatch(loadingComplete(items))
    }
}

export const setActiveProject = projectId => (dispatch, getState) => {
    const { projects } = getState()

    // skip if project is already set
    if (projects.activeId === projectId) {
        return
    }

    dispatch(setActiveId(projectId))
    dispatch(fetchCards(projectId))
}

export const start = dispatch => dispatch(fetch())
