// @flow

declare type Card = {
    id: number;
    title: string;
}

declare type CardsState = {
    isReady: bool;
    isLoading: bool;
    hasLoaded: bool;
    items: Array<Card>;
}


export const initialState: CardsState = {
    isReady: false,
    isLoading: false,
    hasLoaded: false,
    items: [],
}

/**
 * Actions
 */

export const START_LOADING: string = 'startLoading@cards'
export const LOADING_COMPLETE: string = 'loadingComplete@cards'
export const UPDATE_CARDS: string = 'updateCards@cards'

export const startLoading = () => ({
    type: START_LOADING,
})

export const loadingComplete = (items: Array<Card>) => ({
    type: LOADING_COMPLETE,
    payload: items,
})

export const updateCards = (items: Array<Card>) => ({
    type: UPDATE_CARDS,
    payload: items,
})

/**
 * Handlers
 */

export const actionHandlers = {
    [START_LOADING]: (state: CardsState) => ({ ...state,
        isLoading: true,
        hasLoaded: false,
    }),
    [LOADING_COMPLETE]: (state: CardsState, action: ReduxAction) => ({ ...state,
        isLoading: false,
        hasLoaded: true,
        items: action.payload,
    }),
    [UPDATE_CARDS]: (state: CardsState, action: ReduxAction) => ({ ...state,
        items: action.payload,
    }),
}

export const reducer = (state: CardsState = initialState, action: ReduxAction) => {
    const handler = actionHandlers[action.type]
    return handler ? handler(state, action) : state
}

export default reducer
