// @flow

declare type Project = {
    id: number;
    title: string;
}

declare type ProjectsState = {
    isReady: bool;
    isLoading: bool;
    hasLoaded: bool;
    items: Array<Project>;
    activeId: string;
}


export const initialState: ProjectsState = {
    isReady: false,
    isLoading: false,
    hasLoaded: false,
    items: [],
    activeId: '',
}

/**
 * Actions
 */

export const START_LOADING: string = 'startLoading@projects'
export const LOADING_COMPLETE: string = 'loadingComplete@projects'
export const SET_ACTIVE_ID: string = 'setActiveId@projects'

export const startLoading = () => ({
    type: START_LOADING,
})

export const loadingComplete = (items: Array<Project>) => ({
    type: LOADING_COMPLETE,
    payload: items,
})

export const setActiveId = (id: string) => ({
    type: SET_ACTIVE_ID,
    payload: id,
})

/**
 * Handlers
 */

export const actionHandlers = {
    [START_LOADING]: (state: ProjectsState) => ({ ...state,
        isLoading: true,
        hasLoaded: false,
    }),
    [LOADING_COMPLETE]: (state: ProjectsState, action: ReduxAction) => ({ ...state,
        isLoading: false,
        hasLoaded: true,
        items: action.payload,
    }),
    [SET_ACTIVE_ID]: (state: ProjectsState, action: ReduxAction) => ({ ...state,
        activeId: action.payload,
    }),
}

export const reducer = (state: ProjectsState = initialState, action: ReduxAction) => {
    const handler = actionHandlers[action.type]
    return handler ? handler(state, action) : state
}

export default reducer
