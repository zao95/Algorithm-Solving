// 정수와 실수를 오름차순으로 정렬하는 머지정렬 알고리즘

// Feature

const input = [20, 35, 14, 66, 2, 7.6, 9, 3, 88, 63, 86, 3, 7.9]

const mergeSort = (arr) => {
    if (arr.length <= 1) {
        return arr
    }

    const mid = Math.floor(arr.length / 2)
    const left = arr.slice(0, mid)
    const right = arr.slice(mid)

    console.log(left, mid, right)
    return merge(mergeSort(left), mergeSort(right))
}

const merge = (left, right) => {
    let result = []

    while (left.length && right.length) {
        if (left[0] < right[0]) {
            result.push(left.shift())
        } else {
            result.push(right.shift())
        }
    }
    while (left.length) {
        result.push(left.shift())
    }
    while (right.length) {
        result.push(right.shift())
    }

    return result
}

const sorted = mergeSort(input)
console.log(sorted)