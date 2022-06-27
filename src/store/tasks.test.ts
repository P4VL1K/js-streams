import {ActionType, div, mult, salatyReducer, StateType, sum} from "./tasks";


test('sum 2 values', () => {

    let a:number = 300
    let b:number = 500

    let result = sum(a,b)

    expect(result).toBe(800)

})

test('division', () => {

    let a = 1000
    let b = 2

    let result = div(a,b)

    expect(result).toBe(500)
})

test('multiplication', () => {

    let a = 1000
    let b = 2

    let result = mult(a,b)

    expect(result).toBe(2000)
})

test ('case SUM of salaryReducer', () => {
    const salary: StateType = 800
    const action: ActionType = {
        type: 'SUM',
        b: 200
    }
    const result = salatyReducer(salary, action)

    expect(result).toBe(1000)
})

test ('case DIV of salaryReducer', () => {
    let state: StateType = 2000
    let action: ActionType = {
        type: 'DIV',
        b: 2
    }
    let result = salatyReducer(state, action)

    expect(result).toBe(1000)
})


test ('case MULT of salaryReducer', () => {
    let state: StateType = 1000
    let action: ActionType = {
        type: "MULT",
        b: 3
    }
    let result = salatyReducer(state, action)

    expect(result).toBe(3000)
})