type StateType = {
    themeId: number
}

const initState: StateType = {
    themeId: 1,
}

type ActionType = ChangeThemeIdType
export const themeReducer = (state = initState, action: ActionType): StateType => { // fix any
    switch (action.type) {
        case "SET_THEME_ID": {
            return {...state, themeId: action.id}
        }
        default:
            return state
    }
}

export type ChangeThemeIdType = ReturnType<typeof changeThemeId>
export const changeThemeId = (id: number) => {
    return {type: 'SET_THEME_ID', id} as const
}