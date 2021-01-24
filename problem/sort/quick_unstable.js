// 정수와 실수를 오름차순으로 정렬하는 퀵정렬 알고리즘

// Feature
// 1.   pivot값은 array의 중간에 있는 요소값을 삽입
// 2.   불안정정렬이므로, 중복값의 위치가 바뀔 수 있다.
// 3.   In Place 방식이므로 메모리 공간이 절약된다.

const input = [20, 35, 14, 66, 2, 7.6, 9, 3, 88, 63, 86, 3, 7.9]

const quickSort = (array, left = 0, right = array.length - 1) => {
    if (left >= right) {
        return
    }
    const divide = (array, left, right, pivot) => {
        console.log(`array: ${array}, left: ${array[left]}, pivot: ${pivot}, right: ${array[right]}`)
        while (left <= right) {
            while (array[left] < pivot) {
                left++;
            }
            while (array[right] > pivot) {
                right--;
            }
            if (left <= right) {
                let swap = array[left]
                array[left] = array[right]
                array[right] = swap
                left++
                right--
            }
        }
        return left;
    }
    const mid = Math.floor((left + right) / 2)
    const pivot = array[mid]
    const partition = divide(array, left, right, pivot)
    quickSort(array, left, partition - 1)
    quickSort(array, partition, right)
    return array;
}

const sorted = quickSort(input)

console.log(sorted)