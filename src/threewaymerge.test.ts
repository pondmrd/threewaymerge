import { Merge3Collection } from "./threewaymerge";


test("Test 3-Way Merge #1", () => {
    const m = new Merge3Collection()
    expect(m.merge([3, 2, 1], [4, 5, 6], [7, 8, 9])).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9])
})

test("Test 3-Way Merge #2", () => {
    const m = new Merge3Collection()
    expect(m.merge([], [4, 5, 6], [7, 8, 9])).toEqual([4, 5, 6, 7, 8, 9])
})

test("Test 3-Way Merge #3", () => {
    const m = new Merge3Collection()
    expect(m.merge([3, 2, 1], [], [7, 8, 9])).toEqual([1, 2, 3, 7, 8, 9])
})

test("Test 3-Way Merge #4", () => {
    const m = new Merge3Collection()
    expect(m.merge([10, 8, 6, 4, 2, 0], [-6, -4, -2], [-5, -3, -1])).toEqual([-6, -5, -4, -3, -2, -1, 0, 2, 4, 6, 8, 10])
})

test("Test 3-Way Merge #5", () => {
    const m = new Merge3Collection()
    expect(m.merge([5, 4, 3, 2, 1], [1, 2, 3, 4, 5], [1, 2, 3, 4, 5])).toEqual([1, 1, 1, 2, 2, 2, 3, 3, 3, 4, 4, 4, 5, 5, 5])
})
