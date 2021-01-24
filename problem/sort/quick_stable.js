// 정수와 실수를 오름차순으로 정렬하는 퀵정렬 알고리즘

// Feature
// 1.   pivot값은 array의 중간에 있는 요소값을 삽입
// 2.   불안정정렬인 Quick Sort를 안정정렬화 시킴
// 3.   Not In Place 방식이므로, 메모리를 많이 필요로 하여 공간적인 낭비가 심하다.

const input = [20, 35, 14, 66, 2, 7.6, 9, 3, 88, 63, 86, 3, 7.9]

const quickSort = (array) => {
    if (array.length < 2) {
        return array
    }
    // const pivot = [array[0]]
    const pivot = [array[Math.round(array.length / 2)]]
    const left = []
    const right = []
    for (let i = 1; i < array.length; i++) {
        if (array[i] < pivot[0]) {
            left.push(array[i])
        } else if (array[i] > pivot[0]) {
            right.push(array[i])
        } else {
            pivot.push(array[i])
        }
    }
    console.log(`left: ${left}, pivot: ${pivot}, right: ${right}`)
    return quickSort(left).concat(pivot, quickSort(right))
}

const sorted = quickSort(input)

console.log(sorted)