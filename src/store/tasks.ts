export const sum = (a:number, b:number) => a + b
export const div = (a:number, b:number) => a / b
export const mult   = (a:number, b:number) => a * b



export type StateType = number
export type ActionType = {
    type: 'SUM' | 'DIV' | 'MULT'
    b: number
}


export const salatyReducer = (state: StateType, action: ActionType): StateType => {
    switch (action.type) {
        case 'SUM':
            return state + action.b
        case 'DIV':
            return state / action.b
        case 'MULT':
            return state * action.b
        default:
            return state
    }

}