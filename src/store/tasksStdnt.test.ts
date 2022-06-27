import {getBanknoteList, getSum, getTriangleType, isEvenIndexSumGreater, isSquareGreater, sum} from "./tasksStdnt";


test( 'get sum', () => {
    expect(sum(1,2,3,4,5)).toBe(15)
    expect(sum(1,-2,3,-4,5)).toBe(9)
})


test('get Triangle Type', () => {
    expect(getTriangleType(1,1,1)).toBe('10')
    expect(getTriangleType(3,3,2)).toBe('01')
    expect(getTriangleType(3,5,4)).toBe('11')
    expect(getTriangleType(10,5,5)).toBe('00')
})

test('get Sum', () => {
    expect(getSum(1000)).toBe(1)
    expect(getSum(0)).toBe(0)
    expect(getSum(12345)).toBe(15)
    expect(getSum(9999)).toBe(36)
    expect(getSum(1029)).toBe(12)
})

test('is Even Sum Greater', () => {
    expect(isEvenIndexSumGreater([1,100,2,200])).toBe(false)
    expect(isEvenIndexSumGreater([100,1,200,2])).toBe(true)
})

test('isSquareGreater', () => {
    expect(isSquareGreater(10, 10)).toBe(false)
    expect(isSquareGreater(10, 15)).toBe(true)
})

test('get banknote list', () => {
    const result1500 = getBanknoteList(1500)
    const result23 = getBanknoteList(23)
    expect(result1500[0]).toBe(1000)
    expect(result1500[1]).toBe(500)
    expect(result23[0]).toBe(20)
    expect(result23[1]).toBe(2)
    expect(result23[2]).toBe(1)
})