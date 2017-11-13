/* eslint import/prefer-default-export: off */

import request from 'superagent'
import { startLoading, loadingComplete, updateCards } from 'Reducers/cards-reducer'

export const fetch = projectId => async (dispatch, getState) => {
    const { settings } = getState()
    let items = []

    dispatch(startLoading())

    try {
        const res = await request.get(`${settings.endpoint}/cards/${projectId}`)
        items = res.body
    } catch (e) {
        alert('Errors while loading projects!') // eslint-disable-line
    } finally {
        dispatch(loadingComplete(items))
    }
}

export const updateMoscow = (cardId, moscow) => async (dispatch, getState) => {
    const { cards } = getState()
    const updatedCards = cards.items.map((card) => {
        if (card.id === cardId) {
            return {
                ...card,
                moscow,
            }
        }
        return card
    })
    dispatch(updateCards(updatedCards))
}
