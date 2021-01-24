// 정수와 실수를 오름차순으로 정렬하는 버블정렬 알고리즘

// Feature
// 1.   임시 변수를 사용하지 않는 변수 값 교환을 구현함
// 2.   임시 변수 미사용으로 연산을 이용한 교환방법으로 인해
//      소수점 12번째 자리에서 소수점 연산이 이상해지는 javascript 자체 버그가 발생하여 이를 수정함

const input = [20, 35, 14, 66, 2, 7.6, 9, 3, 88, 63, 86, 3, 7.9]

const bubble = (input) => {
    let answer
    for (let i = 0; i < input.length; i++) {
        for (let j = 0; j < input.length - i; j++) {
            if (input[j] > input[j + 1]) {
                input[j] = Number((input[j] + input[j + 1]).toFixed(12))
                input[j + 1] = Number((input[j] - input[j + 1]).toFixed(12))
                input[j] = Number((input[j] - input[j + 1]).toFixed(12))
            }
        }
    }
    answer = [...input]
    return answer
}

console.log(bubble(input))